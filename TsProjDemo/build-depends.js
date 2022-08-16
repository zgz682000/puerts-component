const path = require('path');
module.exports = {
    entry: {
        "debug/source-map-support.cjs": "./node_modules/source-map-support/source-map-support.js"
    },
    externals: {
        path: "commonjs2 path",
        fs: "commonjs2 fs",
    },
    mode: "development",
    experiments: {
        outputModule: true
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, '../Assets/Demo/Resources/'),
        libraryTarget: "commonjs"
    },
    devtool: 'source-map',
    externalsType: "module"
}