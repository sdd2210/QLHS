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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const teacher_service_1 = require("./teacher.service");
const app_controller_1 = require("../../app.controller");
const custom_logger_1 = require("../../common/custom.logger");
const role_guard_1 = require("../auth/guards/role.guard");
const auth_service_1 = require("../auth/auth.service");
let TeacherController = class TeacherController extends app_controller_1.AppController {
    constructor(teacherService, authService) {
        super();
        this.teacherService = teacherService;
        this.authService = authService;
        this.logger = new custom_logger_1.LoggerService();
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teacherService.getAll(body.searchstring, body.class_id, body.status, body.rowsPerpage, body.currentPage);
        });
    }
    createOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_user = yield this.authService.addNew(body.user_name, '123456', body.full_name, body.gender, body.phone, body.email, body.dob ? new Date(body.dob) : undefined, 'TEACHER');
            const new_student = yield this.teacherService.createTeacher(Object.assign(Object.assign({}, body), { account_id: new_user._id }));
            return new_student;
        });
    }
    createSubjectOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_user = yield this.authService.addNew(body.user_name, '123456', body.full_name, body.gender, body.phone, body.email, body.dob ? new Date(body.dob) : undefined, 'TEACHER2');
            const new_student = yield this.teacherService.createTeacher(Object.assign(Object.assign({}, body), { account_id: new_user._id }));
            return new_student;
        });
    }
};
__decorate([
    (0, common_1.Post)('/getAll'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/add_new_homeroom'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('/add_new_subject'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "createSubjectOne", null);
TeacherController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [teacher_service_1.TeacherService,
        auth_service_1.AuthService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map