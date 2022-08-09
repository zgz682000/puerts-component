using System.Text;

using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using System.Reflection;
using System.Linq;

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

        protected static List<IPrimitivePropertySerializer> PropertySerializers => _propertySerializers;
        private static List<IPrimitivePropertySerializer> _propertySerializers = new List<IPrimitivePropertySerializer>();

        protected static List<Type> GetTypeNames(System.Type typeBase, string assemblyName)
        {
            List<Type> resTypes = new List<Type>();
            Assembly assembly = null;
            try
            {
                assembly = Assembly.Load(assemblyName);
            }
            catch
            {
                return null;
            }

            if (assembly == null)
            {
                return null;
            }

            System.Type[] types = assembly.GetTypes();
            foreach (System.Type type in types)
            {
                if (type.IsClass && !type.IsAbstract && typeBase.IsAssignableFrom(type))
                {
                    resTypes.Add(type);
                }
            }

            return resTypes;
        }

        protected static void CollectAllSerializer(){
            _propertySerializers.Clear();
            var types = GetTypeNames(typeof(IPrimitivePropertySerializer), "Assembly-CSharp");
            var assembly = Assembly.Load("Assembly-CSharp");
            types.ForEach(e=>{
                var instance = (IPrimitivePropertySerializer)Activator.CreateInstance(e);
                if (instance != null){
                    _propertySerializers.Add(instance);
                }
            });
        }

        public class Property {
            public string name;
            public Type type;
        }

        protected static List<Property> PickProperties(string tsModulePath){
            try
            {
                var propertiesPickFunc = EditorJsEnv.ExecuteModule<Func<string, Dictionary<string, Tuple<Type, string>>>>("puerts-component/properties-pick", "default");
                var propertiesDict = propertiesPickFunc(tsModulePath);
                var ret = new List<Property>();
                foreach(var pair in propertiesDict){
                    Property property;
                    if (pair.Value.Item2 != null){
                        property = JsonUtility.FromJson<Property>(pair.Value.Item2);
                    }else{
                        property = new Property();
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