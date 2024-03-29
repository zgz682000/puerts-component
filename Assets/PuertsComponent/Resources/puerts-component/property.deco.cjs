"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.ListProperty = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
function ListProperty(type, dimension = 1, options) {
    return !csharp_1.UnityEngine.Application.isEditor ?
        (target, propertyKey) => {
            let name = options && options.name ? options.name : propertyKey;
            if (!target.hasOwnProperty("__properties")) {
                target.__properties = Object.assign({}, target.__properties);
            }
            target.__properties[name] = {
                key: propertyKey
            };
            if (options && options.toTsValue) {
                target.__properties[name].toTsValue = options.toTsValue;
                delete options.toTsValue;
            }
        }
        : (target, propertyKey) => {
            let name = options && options.name ? options.name : propertyKey;
            if (!target.hasOwnProperty("__properties")) {
                target.__properties = Object.assign({}, target.__properties);
            }
            for (var i = 0; i < dimension; i++) {
                type = (0, puerts_1.$generic)(csharp_1.System.Collections.Generic.List$1, type);
            }
            target.__properties[name] = {
                type: (0, puerts_1.$typeof)(type),
                options: options,
                key: propertyKey
            };
            if (options && options.toTsValue) {
                target.__properties[name].toTsValue = options.toTsValue;
                delete options.toTsValue;
            }
        };
}
exports.ListProperty = ListProperty;
function Property(type, options) {
    return !csharp_1.UnityEngine.Application.isEditor ?
        (target, propertyKey) => {
            let name = options && options.name ? options.name : propertyKey;
            if (!target.hasOwnProperty("__properties")) {
                target.__properties = Object.assign({}, target.__properties);
            }
            target.__properties[name] = {
                key: propertyKey
            };
            if (options && options.toTsValue) {
                target.__properties[name].toTsValue = options.toTsValue;
                delete options.toTsValue;
            }
        }
        : (target, propertyKey) => {
            let name = options && options.name ? options.name : propertyKey;
            if (!target.hasOwnProperty("__properties")) {
                target.__properties = Object.assign({}, target.__properties);
            }
            target.__properties[name] = {
                type: (0, puerts_1.$typeof)(type),
                options: options,
                key: propertyKey
            };
            if (options && options.toTsValue) {
                target.__properties[name].toTsValue = options.toTsValue;
                delete options.toTsValue;
            }
        };
}
exports.Property = Property;
//# sourceMappingURL=property.deco.cjs.map