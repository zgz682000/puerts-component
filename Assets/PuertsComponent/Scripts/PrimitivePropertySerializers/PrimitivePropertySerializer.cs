
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
        int Priority {
            get;
        }
        object InternalRenderEditorGUIField(string propName, object propValue);
        bool OptionsFilter(Dictionary<string, object> propertyOptions);
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
        public abstract T RenderEditorGUIField(string propName, T propValue);
        

        public string InternalValueToString(object value)
        {
            return ValueToString((T)value);
        }

        public object InternalStringToValue(string str)
        {
            return (object)StringToValue(str);
        }
#if UNITY_EDITOR
        public virtual int Priority => 0;
        
        public object InternalRenderEditorGUIField(string propName, object propValue)
        {
            return RenderEditorGUIField(propName, (T)propValue);
        }
        public virtual bool OptionsFilter(Dictionary<string, object> propertyOptions) {
            return false;
        }
#endif
    }
}