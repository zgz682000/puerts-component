
using System;

namespace Puerts.Component {
    public interface IPrimitivePropertySerializer
    {
        Type Type {
            get;
        }
        bool ShouldRenderPrefix {
            get;
        }
        int ValueTypeId {
            get;
        }
        string InteralValueToString(object value);
        object InteralStringToValue(string str);
#if UNITY_EDITOR
        object InteralRenderEditorGUIField(string propName, object propValue);
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
        public abstract bool ShouldRenderPrefix {
            get;
        }
        public abstract string ValueToString(T value);
        public abstract T StringToValue(string str);
        public abstract T RenderEditorGUIField(string propName, T propValue);

        public string InteralValueToString(object value)
        {
            return ValueToString((T)value);
        }

        public object InteralStringToValue(string str)
        {
            return (object)StringToValue(str);
        }
#if UNITY_EDITOR
        public object InteralRenderEditorGUIField(string propName, object propValue)
        {
            return RenderEditorGUIField(propName, (T)propValue);
        }
#endif
    }
}