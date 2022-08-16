"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const transporter_deco_cjs_1 = require("puerts-component/transporter.deco.cjs");
const component_cjs_1 = require("puerts-component/component.cjs");
const property_deco_cjs_1 = require("puerts-component/property.deco.cjs");
const csharp_1 = require("csharp");
let TestComponent = class TestComponent extends component_cjs_1.Component {
    test1Prop;
    /**
     * 定义一个数组属性
     */
    test3Prop;
    test4Prop;
    test5Prop;
    /**
     * 定义一个二维数组属性
     */
    test6Prop;
    /**
     * 定义一个其他ts组件类型的属性
     */
    test7Prop;
    /**
     * 定义一个ts资源类型的属性
     */
    test8Prop;
    Start() {
        console.log("TestComponent Start");
        console.log(this.gameObject);
        console.log(this.transform);
        console.log(this.test1Prop);
        console.log(this.test3Prop);
        console.log(this.test6Prop);
        console.log(this.test7Prop.testNumber);
        console.log(this.test7Prop.testPassword);
        console.log(this.test8Prop.testProp1);
    }
};
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.UnityEngine.Transform)
], TestComponent.prototype, "test1Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.ListProperty)(csharp_1.UnityEngine.GameObject)
], TestComponent.prototype, "test3Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.System.Boolean)
], TestComponent.prototype, "test4Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.UnityEngine.Vector3)
], TestComponent.prototype, "test5Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.ListProperty)(csharp_1.UnityEngine.Vector3, 2)
], TestComponent.prototype, "test6Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.Puerts.Component.TsComponent)
], TestComponent.prototype, "test7Prop", void 0);
__decorate([
    (0, property_deco_cjs_1.Property)(csharp_1.Puerts.Component.TsAsset)
], TestComponent.prototype, "test8Prop", void 0);
TestComponent = __decorate([
    (0, transporter_deco_cjs_1.Transporter)()
], TestComponent);
exports.default = TestComponent;
//# sourceMappingURL=test-component.cjs.map