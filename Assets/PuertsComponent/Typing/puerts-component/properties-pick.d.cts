import { Puerts, System } from "csharp";
declare module 'csharp' {
    namespace Puerts.Component.TsEditorBase {
        class Property {
            options: System.Collections.Generic.Dictionary$2<string, any>;
            type: System.Type;
            name: string;
        }
    }
}
declare function PropertiesPick(modulePath: string): System.Collections.Generic.List$1<Puerts.Component.TsEditorBase.Property>;
export = PropertiesPick;
