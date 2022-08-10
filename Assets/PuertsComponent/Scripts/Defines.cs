


using System;
using System.Collections.Generic;

namespace Puerts.Component {
    [Serializable]
    public class PropertyValue {
        public int valueTypeId;
        public UnityEngine.Object objValue;
        public string primitiveValue;
        public List<PropertyValue> listValue;
    }

    [Serializable]
    public class Property
    {
        public string name;
        public PropertyValue value;
    }

    public enum PropertyValueType {
        NONE = 1,
        OBJECT = 2,
        LIST = 4
    }
}