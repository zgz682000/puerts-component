import { Puerts, System } from "csharp";
import { $typeof } from "puerts";

let transporterObjs: {[key: number]: any} = {};

export function getTransporterObj<T>(transporter: Puerts.Component.TsTransporter): T {
    return transporterObjs[transporter.GetHashCode()];
}

function ConvertValue(value: any, toTsValue?: (csValue: any)=>any): any{
    if (value && value.Transporter){
        return toTsValue ? toTsValue(getTransporterObj(value.Transporter)) : getTransporterObj(value.Transporter);
    }else if (value && value.Count && value.get_Item){
        var jsArrayValue = [];
        for(let i = 0; i < value.Count; i++){
            let ele = value.get_Item(i);
            let convertedEle = ConvertValue(ele, toTsValue);
            jsArrayValue.push(convertedEle);
        }
        return jsArrayValue;
    }
    return toTsValue ? toTsValue(value) : value;
}

export function Transporter(){
    return (ctor: new()=>any) => {
        (ctor as any).__transporter_clear = (transporter: Puerts.Component.TsTransporter) =>{
            delete transporterObjs[transporter.GetHashCode()];
        }
        (ctor as any).__transporter_init = (transporter: Puerts.Component.TsTransporter, properties: System.Collections.Generic.List$1<System.Tuple$2<string, any>>)=>{
            let o = new ctor();
            let propertiesOptions: {[key: string]: {
                key: string
                toTsValue?: (csValue: any)=>any
            }} = (o as any).__properties
            for(let i = 0; i < properties.Count; i++){
                let property = properties.get_Item(i);
                let value = property.Item2;
                let key: string;
                let toTsValue : (csValue: any)=>any;
                if (propertiesOptions && propertiesOptions[property.Item1]){
                    key = propertiesOptions[property.Item1].key;
                    toTsValue = propertiesOptions[property.Item1].toTsValue;
                }else{
                    key = property.Item1
                }
                o[key] = ConvertValue(value, toTsValue);
            }
            if (ctor.prototype.hasOwnProperty("__hooks")) {
                Object.keys(ctor.prototype.__hooks).forEach(e => {
                    transporter.RegisterHook(e, (args: System.Array$1<any>) => {
                        let argsJsArr = [];
                        for(let i = 0; i < args.Length; i++){
                            argsJsArr.push(args.get_Item(i));
                        }
                        let key = ctor.prototype.__hooks[e].key;
                        if (!o[key]){
                            throw new Error("member not exist: " + e)
                        }
                        return (o[key] as (...args: any[])=>any).apply(o, argsJsArr);
                    });
                });
            }
            
            transporterObjs[transporter.GetHashCode()] = o;
        }
    }
}