
#if UNITY_EDITOR
using System.Collections.Generic;
using UnityEditor;
#endif

using UnityEngine;

namespace Puerts.Component {
    public class StringPropertySerializer : PrimitivePropertySerializer<string>
    {
        public override int ValueTypeId => 3;
#if UNITY_EDITOR
        public override string RenderEditorGUIField(string propName, string propValue, Dictionary<string, object> options)
        {
            return EditorGUILayout.TextField(new GUIContent(propName), propValue);
        }
#endif
        public override string StringToValue(string str)
        {
            return str;
        }

        public override string ValueToString(string value)
        {
            return value;
        }
    }
}