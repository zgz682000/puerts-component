import { Puerts, System } from "csharp";

let transporterObjs: {[key: number]: any} = {};

export function getTransporterObj<T>(transporter: Puerts.Component.TsTransporter): T {
    return transporterObjs[transporter.GetHashCode()];
}

export function Transporter(){
    return (ctor: new()=>any) => {
        (ctor as any).__transporter_clear = (transporter: Puerts.Component.TsTransporter) =>{
            delete transporterObjs[transporter.GetHashCode()];
        }
        (ctor as any).__transporter_init = (transporter: Puerts.Component.TsTransporter, args: System.Collections.Generic.List$1<System.Tuple$2<string, any>>, hookNames: System.Collections.Generic.List$1<string>)=>{
            let o = new ctor();
            let argNames: {[key: string]: string} = (o as any).__tsArgNames
            for(let i = 0; i < args.Count; i++){
                let arg = args.get_Item(i);
                let value = arg.Item2;
                if (argNames && argNames[arg.Item1]){
                    (o as any)[argNames[arg.Item1]] = value;
                }else{
                    (o as any)[arg.Item1] = value;
                }
            }
            for(let i = 0; i < hookNames.Count; i++){
                let e = hookNames.get_Item(i);
                transporter.RegisterHook(e, (args: System.Array$1<any>) => {
                    let argsJsArr = [];
                    for(let i = 0; i < args.Length; i++){
                        argsJsArr.push(args.get_Item(i));
                    }
                    if (!o[e]){
                        throw new Error("member not exist: " + e)
                    }
                    return (o[e] as (...args: any[])=>any).apply(o, argsJsArr);
                });
            }
            transporterObjs[transporter.GetHashCode()] = o;
        }
    }
}