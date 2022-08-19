"use strict";
function TransporterClear(modulePath, transporter) {
    var cls = require(modulePath);
    if (!cls || !cls.__transporter_clear) {
        return;
    }
    cls.__transporter_clear(transporter);
}
module.exports = TransporterClear;
//# sourceMappingURL=transporter-clear.cjs.map