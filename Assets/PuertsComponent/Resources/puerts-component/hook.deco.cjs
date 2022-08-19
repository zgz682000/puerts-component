"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hook = void 0;
function Hook(options) {
    return (target, propertyKey, descriptor) => {
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__hooks"]) {
            target["__hooks"] = {};
        }
        target["__hooks"][name] = {
            key: propertyKey
        };
    };
}
exports.Hook = Hook;
//# sourceMappingURL=hook.deco.cjs.map