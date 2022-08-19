"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const hook_deco_cjs_1 = require("./hook.deco.cjs");
class Component {
    _gameObject;
    get gameObject() {
        return this._gameObject;
    }
    _transform;
    get transform() {
        return this._transform;
    }
    Awake() { }
    Start() { }
    OnDestroy() { }
    OnEnable() { }
    OnDisable() { }
}
__decorate([
    (0, hook_deco_cjs_1.Hook)()
], Component.prototype, "Awake", null);
__decorate([
    (0, hook_deco_cjs_1.Hook)()
], Component.prototype, "Start", null);
__decorate([
    (0, hook_deco_cjs_1.Hook)()
], Component.prototype, "OnDestroy", null);
__decorate([
    (0, hook_deco_cjs_1.Hook)()
], Component.prototype, "OnEnable", null);
__decorate([
    (0, hook_deco_cjs_1.Hook)()
], Component.prototype, "OnDisable", null);
exports.Component = Component;
//# sourceMappingURL=component.cjs.map