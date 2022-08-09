
using System;

namespace Puerts.Component {
    public interface IPrimitivePropertySerializer
    {
        Type Type {
            get;
        }
        int ValueTypeId {
            get;
        }
        bool InternalOptionsFilter(PropertyOptions propertyOptions);
        string InternalValueToString(object value);
        object InternalStringToValue(string str);
#if UNITY_EDITOR
        object InternalRenderEditorGUIField(string propName, object propValue);
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
        public virtual bool OptionsFilter(PropertyOptions propertyOptions) {
            return false;
        }

        public string InternalValueToString(object value)
        {
            return ValueToString((T)value);
        }

        public object InternalStringToValue(string str)
        {
            return (object)StringToValue(str);
        }
#if UNITY_EDITOR
        public object InternalRenderEditorGUIField(string propName, object propValue)
        {
            return RenderEditorGUIField(propName, (T)propValue);
        }

        public bool InternalOptionsFilter(PropertyOptions propertyOptions)
        {
            return OptionsFilter(propertyOptions);
        }
#endif
    }
}