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
exports.SchoolYearSchema = exports.T_SchoolYear = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Semester = class Semester {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Semester.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Semester.prototype, "start_date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Semester.prototype, "end_date", void 0);
Semester = __decorate([
    (0, mongoose_1.Schema)()
], Semester);
let T_SchoolYear = class T_SchoolYear {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], T_SchoolYear.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], T_SchoolYear.prototype, "semester", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], T_SchoolYear.prototype, "create_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], T_SchoolYear.prototype, "update_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", Date)
], T_SchoolYear.prototype, "delete_at", void 0);
T_SchoolYear = __decorate([
    (0, mongoose_1.Schema)()
], T_SchoolYear);
exports.T_SchoolYear = T_SchoolYear;
exports.SchoolYearSchema = mongoose_1.SchemaFactory.createForClass(T_SchoolYear);
//# sourceMappingURL=schoolyear.schema.js.map