

using System;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

namespace Puerts.Component {
    public class IntPropertySerializer : PrimitivePropertySerializer<int>
    {
#if UNITY_EDITOR
        public override int RenderEditorGUIField(string propName, int propValue)
        {
            return EditorGUILayout.IntField(new GUIContent(propName), propValue);
        }
#endif
        public override int StringToValue(string str)
        {
            return int.Parse(str);
        }

        public override string ValueToString(int value)
        {
            return value.ToString();
        }

        public override int ValueTypeId => 103;
    }
}