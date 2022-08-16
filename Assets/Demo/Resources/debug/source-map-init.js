var csharp = require("csharp");
var puerts = require("puerts");
puerts.registerBuildinModule("path", {
    dirname(path) {
        return csharp.System.IO.Path.GetDirectoryName(path);
    },
    resolve(dir, url) {
        url = url.replace(/\\/g, "/");
        while (url.startsWith("../")) {
            dir = csharp.System.IO.Path.GetDirectoryName(dir);
            url = url.substr(3);
        }
        return csharp.System.IO.Path.Combine(dir, url);
    },
});
puerts.registerBuildinModule("fs", {
    existsSync(path) {
        return csharp.System.IO.File.Exists(path);
    },
    readFileSync(path) {
        return csharp.System.IO.File.ReadAllText(path);
    },
});
(function () {
    let global = this ?? globalThis;
    global["Buffer"] = global["Buffer"] ?? {};
    //使用inline-source-map模式, 需要额外安装buffer模块
    //global["Buffer"] = global["Buffer"] ?? require("buffer").Buffer;
})();
require('source-map-support').install();
//# sourceMappingURL=source-map-init.js.map