

using System;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

namespace Puerts.Component {
    public class FloatPropertySerializer : PrimitivePropertySerializer<float>
    {
#if UNITY_EDITOR
        public override float RenderEditorGUIField(string propName, float propValue)
        {
            return EditorGUILayout.FloatField(new GUIContent(propName), propValue);
        }
#endif
        public override float StringToValue(string str)
        {
            return float.Parse(str);
        }

        public override string ValueToString(float value)
        {
            return value.ToString();
        }

        public override int ValueTypeId => 105;
    }
}