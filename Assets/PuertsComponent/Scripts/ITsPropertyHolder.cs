using System;
using System.Collections.Generic;


namespace Puerts.Component {
    public interface ITsPropertyHolder {
        List<Property> Properties {
            get;
        }
    }

    public static class TsPropertyHolderExtension {

        private static object ConvertValue(PropertyValue value){
            if (value.valueTypeId == (int)PropertyValueType.OBJECT) {
                if (value.objValue is ITsTransporterHolder){
                    (value.objValue as ITsTransporterHolder).Init();
                }
                return value.objValue;
            }
            else if (value.valueTypeId == (int)PropertyValueType.LIST){
                return value.listValue.ConvertAll(e=>ConvertValue(e));
            }else if (value.valueTypeId != (int)PropertyValueType.NONE){
                var serializer = PrimitivePropertySerializerCollector.PropertySerializers.Find(e=>e.ValueTypeId == value.valueTypeId);
                if (serializer != null){
                    return serializer.InternalStringToValue(value.primitiveValue);
                }
            }
            return null;
        }

        public static List<Tuple<string, object>> ConvertPropertiesValue(this ITsPropertyHolder holder){
            return holder.Properties.ConvertAll(e=>{
                return new Tuple<string, object>(e.name, ConvertValue(e.value));;
            });
        }
    }
}