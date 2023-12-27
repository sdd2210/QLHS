"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegeSchema = exports.Privilege = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Privilege = class Privilege {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Privilege.prototype, "privilege_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Privilege.prototype, "privilege_discription", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Privilege.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Privilege.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Privilege.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Privilege.prototype, "updated_at", void 0);
Privilege = __decorate([
    (0, mongoose_1.Schema)()
], Privilege);
exports.Privilege = Privilege;
exports.PrivilegeSchema = mongoose_1.SchemaFactory.createForClass(Privilege);
//# sourceMappingURL=privilege.schema.js.map