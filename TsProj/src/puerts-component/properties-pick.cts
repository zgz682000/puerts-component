import { System } from "csharp";
import { $generic } from "puerts";


let Tuple = $generic(System.Tuple$2, System.Type, System.String);
let Dictionary = $generic(System.Collections.Generic.Dictionary$2, System.String, Tuple);

function PropertiesPick(modulePath: string): System.Collections.Generic.Dictionary$2<string, System.Tuple$2<System.Type, string>>{
    let module = require(modulePath);
    if (!module){
        throw new Error("modulePath not exist: " + modulePath);
    }
    let cls = module.default;
    if (!cls){
        throw new Error("class not export as default: " + modulePath);
    }
    let o = new cls();
    let ret = new Dictionary<string, System.Tuple$2<System.Type, string>>();
    if (!o.__properties){
        return ret;
    }
    let propertyKeys = Object.keys(o.__properties);
    propertyKeys.forEach(e=>{
        let type = o.__properties[e].type;
        let options = o.__properties[e].options;
        let tuple = new Tuple<System.Type, string>(type, options ? JSON.stringify(options) : null);
        ret.Add(e, tuple);
    });
    return ret;
}


export = PropertiesPick;