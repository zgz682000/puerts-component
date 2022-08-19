"use strict";
function TransporterInit(modulePath, transporter, args, hookNames) {
    let module = require(modulePath);
    if (!module) {
        throw new Error("modulePath not exist: " + modulePath);
    }
    let cls = module.default;
    if (!cls) {
        throw new Error("class not export as default: " + modulePath);
    }
    if (!cls.__transporter_init) {
        throw new Error("class doesn't decorated by @Transporter: " + modulePath);
    }
    cls.__transporter_init(transporter, args, hookNames);
}
module.exports = TransporterInit;
//# sourceMappingURL=transporter-init.cjs.map