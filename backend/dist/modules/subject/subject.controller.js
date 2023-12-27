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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const subject_service_1 = require("./subject.service");
const app_controller_1 = require("../../app.controller");
const custom_logger_1 = require("../../common/custom.logger");
const role_guard_1 = require("../auth/guards/role.guard");
let SubjectController = class SubjectController extends app_controller_1.AppController {
    constructor(gradeService) {
        super();
        this.gradeService = gradeService;
        this.logger = new custom_logger_1.LoggerService();
    }
    creatOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.createOne(body);
        });
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getAll(body.grade_key);
        });
    }
    editOne(param, req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.editOne(param.id, body);
        });
    }
    deleteOne(param, req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.deleteOne(param.id);
        });
    }
    getStatics(req, param, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getStatics();
        });
    }
    getCommon(req, param, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getCommon();
        });
    }
};
__decorate([
    (0, common_1.Post)('/addnew'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "creatOne", null);
__decorate([
    (0, common_1.Post)('/list_all'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/edit/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "editOne", null);
__decorate([
    (0, common_1.Post)('/delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Get)('/statics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getStatics", null);
__decorate([
    (0, common_1.Get)('/common'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getCommon", null);
SubjectController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map