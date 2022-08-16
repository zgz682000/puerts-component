"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const component_cjs_1 = require("puerts-component/component.cjs");
const property_deco_cjs_1 = require("puerts-component/property.deco.cjs");
const transporter_deco_cjs_1 = require("puerts-component/transporter.deco.cjs");
let TestComponent2 = class TestComponent2 extends component_cjs_1.Component {
    testNumber;
    testPassword;
};
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.System.Int32)
], TestComponent2.prototype, "testNumber", void 0);
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.System.String, { password: true })
], TestComponent2.prototype, "testPassword", void 0);
TestComponent2 = __decorate([
    (0, transporter_deco_cjs_1.Transporter)()
], TestComponent2);
exports.default = TestComponent2;
//# sourceMappingURL=test-component2.cjs.map