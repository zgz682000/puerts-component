

#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;
using System.Collections.Generic;

namespace Puerts.Component {
    public class PasswordPropertySerializer : StringPropertySerializer  {
        public override int ValueTypeId => 109;
#if UNITY_EDITOR
        public override bool OptionsFilter(Dictionary<string, object> propertyOptions)
        {
            if (propertyOptions.ContainsKey("password") && (bool)propertyOptions["password"]) {
                return true;
            }
            return false;
        }
        public override int Priority => 2;

        public override string RenderEditorGUIField(string propName, string propValue)
        {
            return EditorGUILayout.PasswordField(new GUIContent(propName), propValue);
        }
#endif
    }
}