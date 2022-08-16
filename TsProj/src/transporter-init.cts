import { Puerts, System } from "csharp";




function TransporterInit(modulePath: string, transporter: Puerts.Component.TsTransporter, args: System.Collections.Generic.List$1<System.Tuple$2<string, any>>, hookNames: System.Collections.Generic.List$1<string>){
    let module = require(modulePath);
    if (!module){
        throw new Error("modulePath not exist: " + modulePath);
    }
    let cls = module.default;
    if (!cls){
        throw new Error("class not export as default: " + modulePath);
    }
    if (!(cls as any).__transporter_init){
        throw new Error("class doesn't decorated by @Transporter: " + modulePath);
    }
    (cls as any).__transporter_init(transporter, args, hookNames);
}

export = TransporterInit; 