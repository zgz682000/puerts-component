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
                    var duplicateTypeIdSerializer = _propertySerializers.Find(e=>e.ValueTypeId == instance.ValueTypeId);
                    if (duplicateTypeIdSerializer != null){
                        throw new Exception("duplicate valueTypeId between " + duplicateTypeIdSerializer.GetType().Name + " and " + e.Name);
                    }
                    _propertySerializers.Add(instance);
                }
            });
            _propertySerializers.Sort((e1, e2)=>Comparer<int>.Default.Compare(e1.Priority, e2.Priority));
        }
    }
}