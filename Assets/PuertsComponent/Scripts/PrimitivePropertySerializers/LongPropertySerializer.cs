

using System;
using System.Collections.Generic;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

namespace Puerts.Component {
    public class LongPropertySerializer : PrimitivePropertySerializer<long>
    {
#if UNITY_EDITOR
        public override long RenderEditorGUIField(string propName, long propValue, Dictionary<string, object> options)
        {
            return EditorGUILayout.LongField(new GUIContent(propName), propValue);
        }
#endif
        public override long StringToValue(string str)
        {
            return long.Parse(str);
        }

        public override string ValueToString(long value)
        {
            return value.ToString();
        }

        public override int ValueTypeId => 104;
    }
}