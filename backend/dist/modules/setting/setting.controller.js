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
exports.SettingController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const setting_service_1 = require("./setting.service");
const app_controller_1 = require("../../app.controller");
const role_decorator_1 = require("../auth/decorator/role.decorator");
const role_guard_1 = require("../auth/guards/role.guard");
let SettingController = class SettingController extends app_controller_1.AppController {
    constructor(settingService) {
        super();
        this.settingService = settingService;
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.settingService.getAll();
        });
    }
    updateInfor(param, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = body.details;
            if (!Array.isArray(details)) {
                throw new common_1.HttpException('Sai định dạng', common_1.HttpStatus.BAD_REQUEST);
            }
            const result = yield this.settingService.updateSetting(param.id, details);
            return result;
        });
    }
};
__decorate([
    (0, common_1.Post)('/listall'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/update/:id'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "updateInfor", null);
SettingController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=setting.controller.js.map