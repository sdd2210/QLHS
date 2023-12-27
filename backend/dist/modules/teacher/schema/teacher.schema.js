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
exports.TeacherSchema = exports.T_Teacher = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClassHistory = class ClassHistory {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ClassHistory.prototype, "class_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ClassHistory.prototype, "start_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], ClassHistory.prototype, "end_date", void 0);
ClassHistory = __decorate([
    (0, mongoose_1.Schema)()
], ClassHistory);
let T_Teacher = class T_Teacher {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], T_Teacher.prototype, "account_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], T_Teacher.prototype, "avatar_url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], T_Teacher.prototype, "teacher_alias_string", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], T_Teacher.prototype, "teacher_alias_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], T_Teacher.prototype, "thumbnail_url", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], T_Teacher.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], T_Teacher.prototype, "class_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], T_Teacher.prototype, "class_list", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], T_Teacher.prototype, "class_history", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], T_Teacher.prototype, "create_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], T_Teacher.prototype, "update_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Date)
], T_Teacher.prototype, "delete_at", void 0);
T_Teacher = __decorate([
    (0, mongoose_1.Schema)()
], T_Teacher);
exports.T_Teacher = T_Teacher;
exports.TeacherSchema = mongoose_1.SchemaFactory.createForClass(T_Teacher);
//# sourceMappingURL=teacher.schema.js.map