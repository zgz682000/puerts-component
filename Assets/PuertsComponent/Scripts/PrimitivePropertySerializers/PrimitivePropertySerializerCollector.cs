using System;
using System.Collections.Generic;
using System.Reflection;

namespace Puerts.Component {

    public class PrimitivePropertySerializerCollector {
        private static List<Type> GetTypeNames(System.Type typeBase, string assemblyName)
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

        public static List<IPrimitivePropertySerializer> PropertySerializers {
            get {
                if (_propertySerializers.Count == 0){
                    CollectAllSerializer();
                }
                return _propertySerializers;
            }
        }
        private static List<IPrimitivePropertySerializer> _propertySerializers = new List<IPrimitivePropertySerializer>();

        private static void CollectAllSerializer(){
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
    }
}