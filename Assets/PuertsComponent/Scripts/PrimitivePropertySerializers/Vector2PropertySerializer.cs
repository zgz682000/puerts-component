using UnityEngine;
using System.Collections.Generic;
#if UNITY_EDITOR
using UnityEditor;
#endif
namespace Puerts.Component {

    public class Vector2PropertySerializer : PrimitivePropertySerializer<Vector2>
    {
        public override int ValueTypeId => 107;
#if UNITY_EDITOR
        public override Vector2 RenderEditorGUIField(string propName, Vector2 propValue, Dictionary<string, object> options)
        {
            return EditorGUILayout.Vector2Field(propName, propValue);
        }
#endif
        public override Vector2 StringToValue(string str)
        {
            var strSepr = str.Split(",");
            return new Vector2(
                strSepr.Length <= 0 ? 0 : float.Parse(strSepr[0]), 
                strSepr.Length <= 1 ? 0 : float.Parse(strSepr[1]));
        }

        public override string ValueToString(Vector2 value)
        {
            return value.x + "," + value.y;
        }
    }

}