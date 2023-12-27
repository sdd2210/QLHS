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
exports.GradeController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const grade_service_1 = require("./grade.service");
const app_controller_1 = require("../../app.controller");
const custom_logger_1 = require("../../common/custom.logger");
const role_guard_1 = require("../auth/guards/role.guard");
let GradeController = class GradeController extends app_controller_1.AppController {
    constructor(gradeService) {
        super();
        this.gradeService = gradeService;
        this.logger = new custom_logger_1.LoggerService();
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getAll(body.level_id);
        });
    }
    getStatics(req, param, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getStatics();
        });
    }
    getByKey(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getByKey(body.key);
        });
    }
    getByID(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gradeService.getByID(body.id);
        });
    }
};
__decorate([
    (0, common_1.Post)('/list_all'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/statics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "getStatics", null);
__decorate([
    (0, common_1.Post)('/getby_key'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "getByKey", null);
__decorate([
    (0, common_1.Post)('/getby_id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GradeController.prototype, "getByID", null);
GradeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [grade_service_1.GradeService])
], GradeController);
exports.GradeController = GradeController;
//# sourceMappingURL=grade.controller.js.map