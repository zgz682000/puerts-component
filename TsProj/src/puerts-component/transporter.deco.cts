import { Puerts, System } from "csharp";
import { $typeof } from "puerts";

let transporterObjs: {[key: number]: any} = {};

export function getTransporterObj<T>(transporter: Puerts.Component.TsTransporter): T {
    return transporterObjs[transporter.GetHashCode()];
}

function ConvertValue(value: any): any{
    if (value && value.Transporter){
        return getTransporterObj(value.Transporter);
    }else if (value && value.Count && value.get_Item){
        var jsArrayValue = [];
        for(let i = 0; i < value.Count; i++){
            let ele = value.get_Item(i);
            let convertedEle = ConvertValue(ele);
            jsArrayValue.push(convertedEle);
        }
        return jsArrayValue;
    }
    return value;
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
            }} = (o as any).__properties
            for(let i = 0; i < properties.Count; i++){
                let property = properties.get_Item(i);
                let value = property.Item2;
                let key: string;
                if (propertiesOptions && propertiesOptions[property.Item1]){
                    key = propertiesOptions[property.Item1].key;
                }else{
                    key = property.Item1
                }
                o[key] = ConvertValue(value);
            }
            if (o.__hooks){
                Object.keys(o.__hooks).forEach(e=>{
                    transporter.RegisterHook(e, (args: System.Array$1<any>) => {
                        let argsJsArr = [];
                        for(let i = 0; i < args.Length; i++){
                            argsJsArr.push(args.get_Item(i));
                        }
                        let key: string = o.__hooks[e].key;
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