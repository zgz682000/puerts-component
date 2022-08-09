using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif
namespace Puerts.Component {

    public class Vector3PropertySerializer : PrimitivePropertySerializer<Vector3>
    {
        public override int ValueTypeId => 102;
#if UNITY_EDITOR
        public override Vector3 RenderEditorGUIField(string propName, Vector3 propValue)
        {
            return EditorGUILayout.Vector3Field(propName, propValue);
        }
#endif
        public override Vector3 StringToValue(string str)
        {
            var strSepr = str.Split(",");
            return new Vector3(
                strSepr.Length <= 0 ? 0 : float.Parse(strSepr[0]), 
                strSepr.Length <= 1 ? 0 : float.Parse(strSepr[1]), 
                strSepr.Length <= 2 ? 0 : float.Parse(strSepr[2]));
        }

        public override string ValueToString(Vector3 value)
        {
            return value.x + "," + value.y + "," + value.z;
        }
    }

}