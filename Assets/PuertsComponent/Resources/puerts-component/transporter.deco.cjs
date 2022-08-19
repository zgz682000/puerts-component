"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporter = exports.getTransporterObj = void 0;
let transporterObjs = {};
function getTransporterObj(transporter) {
    return transporterObjs[transporter.GetHashCode()];
}
exports.getTransporterObj = getTransporterObj;
function ConvertValue(value) {
    if (value && value.Transporter) {
        return getTransporterObj(value.Transporter);
    }
    else if (value && value.Count && value.get_Item) {
        var jsArrayValue = [];
        for (let i = 0; i < value.Count; i++) {
            let ele = value.get_Item(i);
            let convertedEle = ConvertValue(ele);
            jsArrayValue.push(convertedEle);
        }
        return jsArrayValue;
    }
    return value;
}
function Transporter() {
    return (ctor) => {
        ctor.__transporter_clear = (transporter) => {
            delete transporterObjs[transporter.GetHashCode()];
        };
        ctor.__transporter_init = (transporter, properties) => {
            let o = new ctor();
            let propertiesOptions = o.__properties;
            for (let i = 0; i < properties.Count; i++) {
                let property = properties.get_Item(i);
                let value = property.Item2;
                let key;
                if (propertiesOptions && propertiesOptions[property.Item1]) {
                    key = propertiesOptions[property.Item1].key;
                }
                else {
                    key = property.Item1;
                }
                o[key] = ConvertValue(value);
            }
            if (o.__hooks) {
                Object.keys(o.__hooks).forEach(e => {
                    transporter.RegisterHook(e, (args) => {
                        let argsJsArr = [];
                        for (let i = 0; i < args.Length; i++) {
                            argsJsArr.push(args.get_Item(i));
                        }
                        let key = o.__hooks[e].key;
                        if (!o[key]) {
                            throw new Error("member not exist: " + e);
                        }
                        return o[key].apply(o, argsJsArr);
                    });
                });
            }
            transporterObjs[transporter.GetHashCode()] = o;
        };
    };
}
exports.Transporter = Transporter;
//# sourceMappingURL=transporter.deco.cjs.map