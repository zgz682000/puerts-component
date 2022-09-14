


using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Puerts.Component { 

    public class JsonProperty {
        public string json;
    }

    public class JsonPropertySerializer : PrimitivePropertySerializer<JsonProperty>
    {
        public override int ValueTypeId => 111;
#if UNITY_EDITOR
        public override JsonProperty RenderEditorGUIField(string propName, JsonProperty propValue, Dictionary<string, object> options)
        {

            EditorGUILayout.PrefixLabel(propName);
            return new JsonProperty() {
                json = EditorGUILayout.TextArea(propValue.json, GUILayout.Height(100))
            };
        }
#endif
        public override JsonProperty StringToValue(string str)
        {
            return new JsonProperty(){json = str};
        }

        public override string ValueToString(JsonProperty value)
        {
            return value.json;
        }
    }

}