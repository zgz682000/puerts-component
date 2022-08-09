using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif
namespace Puerts.Component {

    public class ColorPropertySerializer : PrimitivePropertySerializer<Color>
    {
        public override int ValueTypeId => 108;
#if UNITY_EDITOR
        public override Color RenderEditorGUIField(string propName, Color propValue)
        {
            return EditorGUILayout.ColorField(propName, propValue);
        }
#endif
        public override Color StringToValue(string str)
        {
            var strSepr = str.Split(",");
            return new Color(
                strSepr.Length <= 0 ? 0 : float.Parse(strSepr[0]), 
                strSepr.Length <= 1 ? 0 : float.Parse(strSepr[1]), 
                strSepr.Length <= 2 ? 0 : float.Parse(strSepr[2]), 
                strSepr.Length <= 3 ? 0 : float.Parse(strSepr[3]));
        }

        public override string ValueToString(Color value)
        {
            return value.r + "," + value.g + "," + value.b + "," + value.a;
        }
    }

}