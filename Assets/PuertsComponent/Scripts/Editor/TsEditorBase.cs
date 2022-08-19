
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace Puerts.Component {

    public class TsEditorBase : UnityEditor.Editor {
        
        public static ILoader JsEnvLoader;
        
        private static int _editorJsEnvIdx = -1;
        protected static JsEnv EditorJsEnv {
            get {
                if (_editorJsEnvIdx == -1){
                    var jsEnv = new JsEnv(JsEnvLoader == null ? new DefaultLoader() : JsEnvLoader);
                    _editorJsEnvIdx = jsEnv.Index;
                    return jsEnv;
                }
                return JsEnv.jsEnvs[_editorJsEnvIdx];
            }
        }

        protected static void ReloadJsEnv(){
            if (_editorJsEnvIdx == -1){
                return;
            }
            EditorJsEnv.Dispose();
            _editorJsEnvIdx = -1;
        }


        public class Property {
            public string name;
            public Type type;
            public Dictionary<string, object> options;
        }

        protected static List<Property> PickProperties(string tsModulePath){
            try
            {
                var propertiesPickFunc = EditorJsEnv.ExecuteModule<Func<string, List<Property>>>("puerts-component/properties-pick", "default");
                return propertiesPickFunc(tsModulePath);
            }
            catch (Exception e){
                Debug.LogException(e);
                return null;
            }
        }


        private SerializedProperty _propertiesProp;
        private SerializedProperty _tsModulePathProp;
        private List<Property> properties;

        void OnEnable()
        {
            ReloadJsEnv();
            _tsModulePathProp = serializedObject.FindProperty("tsModulePath");
            _propertiesProp = serializedObject.FindProperty("properties");
            _propIndexByName.Clear();
            for(var j = 0; j < _propertiesProp.arraySize; j++){
                var propertyProp = _propertiesProp.GetArrayElementAtIndex(j);
                var propertyNameProp = propertyProp.FindPropertyRelative("name");
                if (_propIndexByName.ContainsKey(propertyNameProp.stringValue)){
                    _propIndexByName.Remove(propertyNameProp.stringValue);
                }
                _propIndexByName.Add(propertyNameProp.stringValue, propertyProp);
            }
            if (!string.IsNullOrEmpty(_tsModulePathProp.stringValue)){
                properties = PickProperties(_tsModulePathProp.stringValue);
            }
        }

        private Dictionary<string, SerializedProperty> _propIndexByName = new Dictionary<string, SerializedProperty>();
        public override void OnInspectorGUI(){
            serializedObject.Update();
            EditorGUILayout.BeginVertical();
            if (_tsModulePathProp != null){
                EditorGUILayout.BeginHorizontal();
                _tsModulePathProp.stringValue = EditorGUILayout.TextField(new GUIContent("Ts Module Path"), _tsModulePathProp.stringValue);
                EditorGUILayout.EndHorizontal();
            }
            if (_propertiesProp != null){
                GUILayout.Space(10f);
                if (properties != null){
                    var i = 0;
                    properties.ForEach(e=>{
                        var needClear = false;
                        SerializedProperty propertyProp;
                        if (_propIndexByName.ContainsKey(e.name)){
                            propertyProp = _propIndexByName[e.name];
                        }else{
                            _propertiesProp.InsertArrayElementAtIndex(i);
                            propertyProp = _propertiesProp.GetArrayElementAtIndex(i);
                            var propertyNameProp = propertyProp.FindPropertyRelative("name");
                            propertyNameProp.stringValue = e.name;
                            needClear = true;
                        }
                        var propertyValueProp = propertyProp.FindPropertyRelative("value");
                        if (needClear){
                            propertyValueProp.FindPropertyRelative("objValue").objectReferenceValue = null;
                            propertyValueProp.FindPropertyRelative("primitiveValue").stringValue = null;
                            propertyValueProp.FindPropertyRelative("listValue").ClearArray();
                        }
                        RenderProp(e.name, propertyValueProp, e.type, 0, e);
                        i++;
                    });
                }
            }
            if (GUILayout.Button("Reload")){
                OnEnable();
            }

            EditorGUILayout.EndVertical();

            serializedObject.ApplyModifiedProperties();
        }

        private string toDeleteElementPath;

        private Rect RenderProp(string name, SerializedProperty prop, Type type, int indent, Property property){
            var valueTypeProp = prop.FindPropertyRelative("valueTypeId");
            if (type.IsGenericType && type.GetGenericTypeDefinition().Equals(typeof(List<>))){
                valueTypeProp.enumValueFlag = (int)PropertyValueType.LIST;
                var listValueProp = prop.FindPropertyRelative("listValue");
                return RenderArrayProp(name, listValueProp, type.GetGenericArguments()[0], indent);
            }
            else if (typeof(UnityEngine.Object).IsAssignableFrom(type)){
                valueTypeProp.intValue = (int)PropertyValueType.OBJECT;
                var objValueProp = prop.FindPropertyRelative("objValue");
                return RenderObjectProp(name, objValueProp, type, indent);
            }
            else {
                IPrimitivePropertySerializer serializer = null;
                var serializers = PrimitivePropertySerializerCollector.PropertySerializers.FindAll(e=>e.Type == type);
                if (property != null && property.options != null && serializers.Count > 1){
                    var filteredSerializer = serializers.Find(e=>e.OptionsFilter(property.options));
                    if (filteredSerializer == null){
                        serializer = serializers[0];
                    }else {
                        serializer = filteredSerializer;
                    }
                }else if (serializers.Count != 0) {
                    serializer = serializers[0];
                }
                if (serializer != null){
                    valueTypeProp.intValue = serializer.ValueTypeId;
                    var primitiveValueProp = prop.FindPropertyRelative("primitiveValue");
                    return RenderPrimitiveProp(serializer, name, primitiveValueProp, type, indent);
                }else{
                    return default(Rect);
                }
            }
        }

        private void RenderIndent(int indent){
            EditorGUI.indentLevel = indent;
        }

        private Rect RenderPrimitiveProp(IPrimitivePropertySerializer serializer, string name, SerializedProperty prop, Type type, int indent){
            var rect = EditorGUILayout.BeginHorizontal();
            RenderIndent(indent); 
            object originValue;
            try
            {
                originValue = serializer.InternalStringToValue(prop.stringValue);
            }
            catch (System.Exception)
            {
                originValue = type.IsValueType ? Activator.CreateInstance(type) : null;
            }
            var newValue = serializer.InternalRenderEditorGUIField(name, originValue);
            if (newValue != originValue){
                prop.stringValue = serializer.InternalValueToString(newValue);
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }

        private Rect RenderArrayProp(string name, SerializedProperty prop, Type subType, int indent){
            var rect = EditorGUILayout.BeginVertical();
            RenderIndent(indent);
            prop.isExpanded = EditorGUILayout.Foldout(prop.isExpanded, name);
            if (prop.isExpanded){
                RenderIndent(indent + 1);
                var newSize = EditorGUILayout.DelayedIntField(new GUIContent ("Length"), prop.arraySize);
                if (newSize != prop.arraySize){
                    prop.arraySize = newSize;
                }
                for(int i = 0; i < prop.arraySize; i++){
                    var elementProp = prop.GetArrayElementAtIndex(i);
                    var rect1 = RenderProp("Element " + i, elementProp, subType, indent + 1, null);
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
            var newStr = EditorGUILayout.TextField(new GUIContent(name), prop.stringValue);
            if (newStr != prop.stringValue){
                prop.stringValue = newStr;
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }

        private Rect RenderObjectProp(string name, SerializedProperty prop, Type type, int indent){
            var rect = EditorGUILayout.BeginHorizontal();
            RenderIndent(indent);
            var newObj = EditorGUILayout.ObjectField(new GUIContent(name), prop.objectReferenceValue, type, true);
            if (newObj != prop.objectReferenceValue){
                prop.objectReferenceValue = newObj;
            }
            EditorGUILayout.EndHorizontal();
            return rect;
        }
    }

}