
#if UNITY_EDITOR
using UnityEditor;
#endif

using UnityEngine;

namespace Puerts.Component {
    public class StringPropertySerializer : PrimitivePropertySerializer<string>
    {
        public override int ValueTypeId => 3;

        public override string RenderEditorGUIField(string propName, string propValue)
        {
            return EditorGUILayout.TextField(new GUIContent(propName), propValue);
        }

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