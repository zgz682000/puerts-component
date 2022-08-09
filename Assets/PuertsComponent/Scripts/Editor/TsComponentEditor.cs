using System.Text;

using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using System.Reflection;
using System.Linq;

namespace Puerts.Component {

    

    [CustomEditor(typeof(TsComponent), true)]
    public class TsComponentEditor: TsEditorBase
    {
        private TsComponent _ins;
        private SerializedProperty _propertiesProp;
        private SerializedProperty _tsModulePathProp;

        private List<Property> properties;
    
        void OnEnable()
        {
            CollectAllSerializer();
            ReloadJsEnv();
            _ins = target as TsComponent;
            _tsModulePathProp = serializedObject.FindProperty("tsModulePath");
            _propertiesProp = serializedObject.FindProperty("properties");
            if (!string.IsNullOrEmpty(_ins.tsModulePath)){
                properties = PickProperties(_ins.tsModulePath);
            }
        }

        public override void OnInspectorGUI(){
            
            if (_propertiesProp == null || _tsModulePathProp == null || _ins == null){
                return;
            }

            serializedObject.Update();

            EditorGUILayout.BeginVertical();
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Ts Module Path");
            _tsModulePathProp.stringValue = EditorGUILayout.TextField(_tsModulePathProp.stringValue);
            EditorGUILayout.EndHorizontal();
            GUILayout.Space(10f);
            if (properties != null){
                var i = 0;
                properties.ForEach(e=>{
                    
                    var needClear = false;
                    if (i >= _propertiesProp.arraySize){
                        _propertiesProp.InsertArrayElementAtIndex(i);
                        needClear = true;
                    }
                    var propertyProp = _propertiesProp.GetArrayElementAtIndex(i);
                    var propertyNameProp = propertyProp.FindPropertyRelative("name");
                    if (propertyNameProp.stringValue != e.name){

                        needClear = true;
                    }
                    propertyNameProp.stringValue = e.name;
                    var propertyValueProp = propertyProp.FindPropertyRelative("value");
                    if (needClear){
                        propertyValueProp.FindPropertyRelative("objValue").objectReferenceValue = null;
                        propertyValueProp.FindPropertyRelative("primitiveValue").stringValue = null;
                        propertyValueProp.FindPropertyRelative("listValue").ClearArray();
                    }
                    RenderProp(e.name, propertyValueProp, e.type, 0);
                    i++;
                });
                for(;i < _propertiesProp.arraySize; i++){
                    _propertiesProp.DeleteArrayElementAtIndex(i);
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
            var valueTypeProp = prop.FindPropertyRelative("valueTypeId");
            if (type.IsGenericType && type.GetGenericTypeDefinition().Equals(typeof(List<>))){
                valueTypeProp.enumValueFlag = (int)TsComponent.PropertyValueType.LIST;
                var listValueProp = prop.FindPropertyRelative("listValue");
                return RenderArrayProp(name, listValueProp, type.GetGenericArguments()[0], indent);
            }
            else if (type == typeof(System.String)){
                valueTypeProp.intValue = (int)TsComponent.PropertyValueType.STRING;
                var primitiveValueProp = prop.FindPropertyRelative("primitiveValue");
                return RenderStringProp(name, primitiveValueProp, indent);
            }
            else if (typeof(UnityEngine.Object).IsAssignableFrom(type)){
                valueTypeProp.intValue = (int)TsComponent.PropertyValueType.OBJECT;
                var objValueProp = prop.FindPropertyRelative("objValue");
                return RenderObjectProp(name, objValueProp, type, indent);
            }
            else {
                var serializer = PropertySerializers.Find(e=>e.Type == type);
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
                RenderIndent(indent + 1);
                var newSize = EditorGUILayout.DelayedIntField(new GUIContent ("Length"), prop.arraySize);
                if (newSize != prop.arraySize){
                    prop.arraySize = newSize;
                }
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