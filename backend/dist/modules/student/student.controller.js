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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const student_service_1 = require("./student.service");
const app_controller_1 = require("../../app.controller");
const custom_logger_1 = require("../../common/custom.logger");
const role_guard_1 = require("../auth/guards/role.guard");
const auth_service_1 = require("../auth/auth.service");
let CustomerController = class CustomerController extends app_controller_1.AppController {
    constructor(customerService, authService) {
        super();
        this.customerService = customerService;
        this.authService = authService;
        this.logger = new custom_logger_1.LoggerService();
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customerService.getAll(body.searchstring, body.class_id, body.status, body.rowsPerpage, body.currentPage);
        });
    }
    UpdateOne(param, req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_user = yield this.authService.updateUser(body.account_id, body.full_name, body.user_name, body.email, body.gender, body.phone, body.dob ? new Date(body.dob) : undefined);
            const new_student = yield this.customerService.updateStudent(param.id, Object.assign(Object.assign({}, body), { account_id: new_user._id }));
            return new_student;
        });
    }
    createOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_user = yield this.authService.addNew(body.user_name, '123456', body.full_name, body.gender, body.phone, body.email, body.dob ? new Date(body.dob) : undefined, 'STUDENTS');
            const new_student = yield this.customerService.createStudent(Object.assign(Object.assign({}, body), { account_id: new_user._id }));
            return new_student;
        });
    }
    createMany(req, body_list) {
        return __awaiter(this, void 0, void 0, function* () {
            const i = 0;
            for (const body of body_list) {
                try {
                    const new_user = yield this.authService.addNew(body.user_name, '123456', body.full_name, body.gender, body.phone, body.email, body.dob ? new Date(body.dob) : undefined, 'STUDENTS');
                    const new_student = yield this.customerService.createStudent(Object.assign(Object.assign({}, body), { account_id: new_user._id }));
                }
                catch (error) {
                    if (error.status != 403) {
                        console.log(error);
                        console.log(body);
                    }
                    console.log(i, body);
                    continue;
                }
            }
        });
    }
    deleteOne(param, req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_student = yield this.customerService.deleteOne(param.id);
            const new_user = yield this.authService.deleteOne(new_student.account_id.toString());
            return new_user;
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
], CustomerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/edit/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "UpdateOne", null);
__decorate([
    (0, common_1.Post)('/add_new'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('/add_many'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "createMany", null);
__decorate([
    (0, common_1.Post)('/delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteOne", null);
CustomerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [student_service_1.CustomerService,
        auth_service_1.AuthService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=student.controller.js.map