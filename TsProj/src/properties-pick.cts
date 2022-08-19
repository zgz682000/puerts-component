import { Puerts, System } from "csharp";
import { $generic } from "puerts";

let List = $generic(System.Collections.Generic.List$1, Puerts.Component.TsEditorBase.Property)
let Dictionary = $generic(System.Collections.Generic.Dictionary$2, System.String, System.Object);

function PropertiesPick(modulePath: string): System.Collections.Generic.List$1<Puerts.Component.TsEditorBase.Property> {
    let module = require(modulePath);
    if (!module) {
        throw new Error("modulePath not exist: " + modulePath);
    }
    let cls = module.default;
    if (!cls) {
        throw new Error("class not export as default: " + modulePath);
    }
    let o = new cls();

    var ret = new List<Puerts.Component.TsEditorBase.Property>();
    if (!o.__properties) {
        return ret;
    }
    let propertyKeys = Object.keys(o.__properties);
    propertyKeys.forEach(e => {
        const property = new Puerts.Component.TsEditorBase.Property();
        let type = o.__properties[e].type;
        let options = o.__properties[e].options;
        if (options) {
            const optDict = new Dictionary();
            Object.keys(options).forEach(key => {
                optDict.Add(key, options[key]);
            });
            property.options = optDict;
        }
        property.type = type;
        property.name = (options && options.name) ? options.name : e;
        ret.Add(property);
    });
    return ret;
}


export = PropertiesPick;