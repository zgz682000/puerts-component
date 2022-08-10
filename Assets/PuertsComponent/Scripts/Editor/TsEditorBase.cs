
using System;
using System.Collections.Generic;
using UnityEngine;
using LitJson;

namespace Puerts.Component {

    public class TsEditorBase : UnityEditor.Editor {
        private static int _editorJsEnvIdx = -1;
        protected static JsEnv EditorJsEnv {
            get {
                if (_editorJsEnvIdx == -1){
                    var jsEnv = new JsEnv();
                    _editorJsEnvIdx = jsEnv.Index;
                    return jsEnv;
                }
                return JsEnv.jsEnvs[_editorJsEnvIdx];
            }
        }

        protected static void ReloadJsEnv(){
            if (_editorJsEnvIdx == -1){
                return;
            }
            EditorJsEnv.Dispose();
            _editorJsEnvIdx = -1;
        }


        protected class Property {
            public string name;
            public Type type;
            public Dictionary<string, object> options;
        }

        protected static List<Property> PickProperties(string tsModulePath){
            try
            {
                var propertiesPickFunc = EditorJsEnv.ExecuteModule<Func<string, Dictionary<string, Tuple<Type, string>>>>("puerts-component/properties-pick", "default");
                var propertiesDict = propertiesPickFunc(tsModulePath);
                var ret = new List<Property>();
                foreach(var pair in propertiesDict){
                    Property property = new Property();
                    if (pair.Value.Item2 != null){
                        property.options = JsonMapper.ToObject<Dictionary<string, object>>(pair.Value.Item2);
                        if (property.options.ContainsKey("name")){
                            property.name = (string)property.options["name"];
                            property.options.Remove("name");
                        }else{
                            property.name = pair.Key;
                        }
                    }else{
                        property.name = pair.Key;
                    }
                    property.type = pair.Value.Item1;
                    ret.Add(property);
                }
                return ret;
            }
            catch (Exception e){
                Debug.LogException(e);
                return null;
            }
        }
    }

}