

#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;
using System.Collections.Generic;

namespace Puerts.Component {

    public class PasswordProperty {
        public string value;
    }

    public class PasswordPropertySerializer : PrimitivePropertySerializer<PasswordProperty>  {
        public override int ValueTypeId => 109;
#if UNITY_EDITOR
        public override PasswordProperty RenderEditorGUIField(string propName, PasswordProperty propValue, Dictionary<string, object> options)
        {
            return new PasswordProperty(){
                value = EditorGUILayout.PasswordField(new GUIContent(propName), propValue.value)
            };
        }
#endif
        public override string ValueToString(PasswordProperty value)
        {
            return value.value;
        }

        public override PasswordProperty StringToValue(string str)
        {
            return new PasswordProperty(){value = str};
        }
    }
}