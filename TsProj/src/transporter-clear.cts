import { Puerts } from "csharp";

function TransporterClear(modulePath: string, transporter: Puerts.Component.TsTransporter){
    var cls = require(modulePath);
    if (!cls || !(cls as any).__transporter_clear){
        return;
    }
    (cls as any).__transporter_clear(transporter);
}

export = TransporterClear;