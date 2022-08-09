using System.Text;

using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using System.Reflection;
using System.Linq;

namespace Puerts.Component {

    

    [CustomEditor(typeof(TsComponent), true)]
    public class TsComponentEditor: UnityEditor.Editor
    {

        private static List<Type> GetTypeNames(System.Type typeBase, string assemblyName)
        {
            List<Type> resTypes = new List<Type>();
            Assembly assembly = null;
            try
            {
                assembly = Assembly.Load(assemblyName);
            }
            catch
            {
                return null;
            }

            if (assembly == null)
            {
                return null;
            }

            System.Type[] types = assembly.GetTypes();
            foreach (System.Type type in types)
            {
                if (type.IsClass && !type.IsAbstract && typeBase.IsAssignableFrom(type))
                {
                    resTypes.Add(type);
                }
            }

            return resTypes;
        }

        private TsComponent ins;
        private SerializedProperty argsProp;
        private SerializedProperty tsModulePathProp;
        private List<IPrimitivePropertySerializer> propertySerializers = new List<IPrimitivePropertySerializer>();

        public class Property {
            public string name;
            public Type type;
        }
        
        private List<Property> PickProperties(string tsModulePath){
            try
            {
                var propertiesPickFunc = EditorJsEnv.JsEnv.ExecuteModule<Func<string, Dictionary<string, Tuple<Type, string>>>>("puerts-component/properties-pick", "default");
                var propertiesDict = propertiesPickFunc(tsModulePath);
                var ret = new List<Property>();
                foreach(var pair in propertiesDict){
                    Property property;
                    if (pair.Value.Item2 != null){
                        property = JsonUtility.FromJson<Property>(pair.Value.Item2);
                    }else{
                        property = new Property();
                        property.name = pair.Key;
                    }
                    property.type = pair.Value.Item1;
                    ret.Add(property);
                }
                return ret;
            }
            catch (Exception e){
                Debug.LogException(e);
                return null;
            }
        }

        private List<Property> properties;

        private void CollectAllSerializer(){
            propertySerializers.Clear();
            var types = GetTypeNames(typeof(IPrimitivePropertySerializer), "Assembly-CSharp");
            var assembly = Assembly.Load("Assembly-CSharp");
            types.ForEach(e=>{
                var instance = (IPrimitivePropertySerializer)Activator.CreateInstance(e);
                if (instance != null){
                    propertySerializers.Add(instance);
                }
            });
        }
    
        void OnEnable()
        {
            CollectAllSerializer();
            EditorJsEnv.ReloadJsEnv();
            ins = target as TsComponent;
            tsModulePathProp = serializedObject.FindProperty("tsModulePath");
            argsProp = serializedObject.FindProperty("args");
            if (!string.IsNullOrEmpty(ins.tsModulePath)){
                properties = PickProperties(ins.tsModulePath);
            }
        }

        public override void OnInspectorGUI(){
            
            if (argsProp == null || tsModulePathProp == null || ins == null){
                return;
            }

            serializedObject.Update();

            EditorGUILayout.BeginVertical();
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Ts Module Path");
            tsModulePathProp.stringValue = EditorGUILayout.TextField(tsModulePathProp.stringValue);
            EditorGUILayout.EndHorizontal();
            GUILayout.Space(10f);
            if (properties != null){
                var i = 0;
                properties.ForEach(e=>{
                    
                    var needClear = false;
                    if (i >= argsProp.arraySize){
                        argsProp.InsertArrayElementAtIndex(i);
                        needClear = true;
                    }
                    var argProp = argsProp.GetArrayElementAtIndex(i);
                    var argNameProp = argProp.FindPropertyRelative("name");
                    if (argNameProp.stringValue != e.name){

                        needClear = true;
                    }
                    argNameProp.stringValue = e.name;
                    var argValueProp = argProp.FindPropertyRelative("value");
                    if (needClear){
                        argValueProp.FindPropertyRelative("objValue").objectReferenceValue = null;
                        argValueProp.FindPropertyRelative("primitiveValue").stringValue = null;
                        argValueProp.FindPropertyRelative("listValue").ClearArray();
                    }
                    RenderProp(e.name, argValueProp, e.type, 0);
                    i++;
                });
                for(;i < argsProp.arraySize; i++){
                    argsProp.DeleteArrayElementAtIndex(i);
                }
            }

            if (GUILayout.Button("Reload")){
                OnEnable();
            }

            EditorGUILayout.EndVertical();

            serializedObject.ApplyModifiedProperties();
        }

        private string toDeleteElementPath;

        private Rect RenderProp(string name, SerializedProperty prop, Type type, int indent){
            var valueTypeProp = prop.FindPropertyRelative("valueType");
            if (type.IsGenericType && type.GetGenericTypeDefinition().Equals(typeof(List<>))){
                valueTypeProp.enumValueFlag = (int)TsComponent.ArgValueType.LIST;
                var listValueProp = prop.FindPropertyRelative("listValue");
                return RenderArrayProp(name, listValueProp, type.GetGenericArguments()[0], indent);
            }
            else if (type == typeof(System.String)){
                valueTypeProp.intValue = (int)TsComponent.ArgValueType.STRING;
                var primitiveValueProp = prop.FindPropertyRelative("primitiveValue");
                return RenderStringProp(name, primitiveValueProp, indent);
            }
            else if (typeof(UnityEngine.Object).IsAssignableFrom(type)){
                valueTypeProp.intValue = (int)TsComponent.ArgValueType.OBJECT;
                var objValueProp = prop.FindPropertyRelative("objValue");
                return RenderObjectProp(name, objValueProp, type, indent);
            }
            else {
                var serializer = propertySerializers.Find(e=>e.Type == type);
                if (serializer != null){
                    valueTypeProp.intValue = (int)serializer.ValueTypeId;
                    var primitiveValueProp = prop.FindPropertyRelative("primitiveValue");
                    return RenderPrimitiveProp(serializer, name, primitiveValueProp, type, indent);
                }else{
                    return default(Rect);
                }
            }
        }

        private void RenderIndent(int indent){
            for(var i = 0; i < indent; i++){
                EditorGUILayout.Space();
            }
        }

        private Rect RenderPrimitiveProp(IPrimitivePropertySerializer serializer, string name, SerializedProperty prop, Type type, int indent){
            var rect = EditorGUILayout.BeginHorizontal();
            RenderIndent(indent); 
            if (serializer.ShouldRenderPrefix) {
                EditorGUILayout.PrefixLabel(name);
            }
            object originValue;
            try
            {
                originValue = serializer.InteralStringToValue(prop.stringValue);
            }
            catch (System.Exception)
            {
                originValue = type.IsValueType ? Activator.CreateInstance(type) : null;
            }
            var newValue = serializer.InteralRenderEditorGUIField(name, originValue);
            if (newValue != originValue){
                prop.stringValue = serializer.InteralValueToString(newValue);
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }

        private Rect RenderArrayProp(string name, SerializedProperty prop, Type subType, int indent){
            var rect = EditorGUILayout.BeginVertical();
            RenderIndent(indent);
            prop.isExpanded = EditorGUILayout.Foldout(prop.isExpanded, name);
            if (prop.isExpanded){
                EditorGUILayout.BeginHorizontal();
                RenderIndent(indent + 1);
                EditorGUILayout.PrefixLabel("Length");
                var newSize = EditorGUILayout.DelayedIntField(prop.arraySize);
                if (newSize != prop.arraySize){
                    prop.arraySize = newSize;
                }

                EditorGUILayout.EndHorizontal();
                for(int i = 0; i < prop.arraySize; i++){
                    var elementProp = prop.GetArrayElementAtIndex(i);
                    var rect1 = RenderProp("Element " + i, elementProp, subType, indent + 1);
                    if (Event.current.type == EventType.ContextClick && rect1.Contains(Event.current.mousePosition)){
                        var menu = new GenericMenu ();
                        menu.AddItem (new GUIContent ("Delete Element"), false, (userData)=>{
                            toDeleteElementPath = (string)userData;
                        }, elementProp.propertyPath);
                        menu.ShowAsContext();
                        Event.current.Use();
                    }
                    if (toDeleteElementPath == elementProp.propertyPath){
                        Debug.Log(toDeleteElementPath);
                        prop.DeleteArrayElementAtIndex(i);
                        toDeleteElementPath = null;
                    }
                }
            }
            EditorGUILayout.EndVertical();
            return rect;
        }

        private Rect RenderStringProp(string name, SerializedProperty prop, int indent){
            var rect = EditorGUILayout.BeginHorizontal();
            RenderIndent(indent);
            EditorGUILayout.PrefixLabel(name);
            var newStr = EditorGUILayout.TextField(prop.stringValue);
            if (newStr != prop.stringValue){
                prop.stringValue = newStr;
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }

        private Rect RenderObjectProp(string name, SerializedProperty prop, Type type, int indent){
            var rect = EditorGUILayout.BeginHorizontal();
            RenderIndent(indent);
            EditorGUILayout.PrefixLabel(name);
            var newObj = EditorGUILayout.ObjectField(prop.objectReferenceValue, type, true);
            if (newObj != prop.objectReferenceValue){
                prop.objectReferenceValue = newObj;
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }
    }
}