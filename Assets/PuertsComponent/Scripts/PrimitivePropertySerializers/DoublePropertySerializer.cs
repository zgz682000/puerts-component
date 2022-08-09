

using System;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

namespace Puerts.Component {
    public class DoublePropertySerializer : PrimitivePropertySerializer<double>
    {
#if UNITY_EDITOR
        public override double RenderEditorGUIField(string propName, double propValue)
        {
            return EditorGUILayout.DoubleField(new GUIContent(propName), propValue);
        }
#endif
        public override double StringToValue(string str)
        {
            return double.Parse(str);
        }

        public override string ValueToString(double value)
        {
            return value.ToString();
        }

        public override int ValueTypeId => 106;
    }
}