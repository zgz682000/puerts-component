
using System;
using System.Collections.Generic;

namespace Puerts.Component {
    public interface IPrimitivePropertySerializer
    {
        Type Type {
            get;
        }
        int ValueTypeId {
            get;
        }

        string InternalValueToString(object value);
        object InternalStringToValue(string str);
#if UNITY_EDITOR
        object InternalRenderEditorGUIField(string propName, object propValue, Dictionary<string, object> options);
#endif
    } 
    public abstract class PrimitivePropertySerializer<T> : IPrimitivePropertySerializer {
        public Type Type {
            get {
                return typeof(T);
            }
        }
        public abstract int ValueTypeId {
            get;
        }

        

        public abstract string ValueToString(T value);
        public abstract T StringToValue(string str);
#if UNITY_EDITOR
        public abstract T RenderEditorGUIField(string propName, T propValue, Dictionary<string, object> options);
#endif  

        public string InternalValueToString(object value)
        {
            return ValueToString((T)value);
        }

        public object InternalStringToValue(string str)
        {
            return (object)StringToValue(str);
        }
#if UNITY_EDITOR
        public object InternalRenderEditorGUIField(string propName, object propValue, Dictionary<string, object> options)
        {
            return RenderEditorGUIField(propName, (T)propValue, options);
        }
#endif
    }
}