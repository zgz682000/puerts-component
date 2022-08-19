"use strict";
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
let List = (0, puerts_1.$generic)(csharp_1.System.Collections.Generic.List$1, csharp_1.Puerts.Component.TsEditorBase.Property);
let Dictionary = (0, puerts_1.$generic)(csharp_1.System.Collections.Generic.Dictionary$2, csharp_1.System.String, csharp_1.System.Object);
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
    var ret = new List();
    if (!o.__properties) {
        return ret;
    }
    let propertyKeys = Object.keys(o.__properties);
    propertyKeys.forEach(e => {
        const property = new csharp_1.Puerts.Component.TsEditorBase.Property();
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
module.exports = PropertiesPick;
//# sourceMappingURL=properties-pick.cjs.map