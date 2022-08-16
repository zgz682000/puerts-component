"use strict";
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
let Tuple = (0, puerts_1.$generic)(csharp_1.System.Tuple$2, csharp_1.System.Type, csharp_1.System.String);
let Dictionary = (0, puerts_1.$generic)(csharp_1.System.Collections.Generic.Dictionary$2, csharp_1.System.String, Tuple);
function PropertiesPick(modulePath) {
    let module = require(modulePath);
    if (!module) {
        throw new Error("modulePath not exist: " + modulePath);
    }
    let cls = module.default;
    if (!cls) {
        throw new Error("class not export as default: " + modulePath);
    }
    let o = new cls();
    let ret = new Dictionary();
    if (!o.__properties) {
        return ret;
    }
    let propertyKeys = Object.keys(o.__properties);
    propertyKeys.forEach(e => {
        let type = o.__properties[e].type;
        let options = o.__properties[e].options;
        let tuple = new Tuple(type, options ? JSON.stringify(options) : null);
        ret.Add(e, tuple);
    });
    return ret;
}
module.exports = PropertiesPick;
//# sourceMappingURL=properties-pick.cjs.map