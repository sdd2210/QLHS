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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const custom_logger_1 = require("../../common/custom.logger");
const auth_service_1 = require("./auth.service");
const app_controller_1 = require("../../app.controller");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const role_decorator_1 = require("./decorator/role.decorator");
const role_guard_1 = require("./guards/role.guard");
const phonemail_validation_pipe_1 = require("../../common/phonemail.validation.pipe");
const mail_service_1 = require("../../common/mail.service");
const bull_1 = require("@nestjs/bull");
let AuthController = class AuthController extends app_controller_1.AppController {
    constructor(authService, emailService, mailQueue) {
        super();
        this.authService = authService;
        this.emailService = emailService;
        this.mailQueue = mailQueue;
        this.logger = new custom_logger_1.LoggerService();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataLogin = yield this.authService.logIn(req.user);
                const token = dataLogin.accessToken;
                if (token) {
                    res.cookie('auth-cookie', token, {
                        httpOnly: true,
                        path: '/api/',
                    });
                }
                return dataLogin;
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    resetPass(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, new_pwd } = body;
                const dataLogin = yield this.authService.reCreatePass(id, new_pwd);
                console.log(dataLogin);
                const token = dataLogin.accessToken;
                if (token) {
                    res.cookie('auth-cookie', token, {
                        httpOnly: true,
                        path: '/api/',
                    });
                }
                return dataLogin;
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.user.token;
                res.cookie('auth-cookie', '', { httpOnly: true, path: '/api/' });
                return this.authService.onRevokeToken(token);
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    getInfor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.user._id;
                return this.authService.getInfor(id);
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    getStatic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.authService.getStatics();
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    UpdateInfor(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { full_name, email, phone, gender, user_name, address, parent_name } = body;
            let birth_day = body.birth_day;
            if (birth_day) {
                birth_day = new Date(birth_day);
            }
            const result = yield this.authService.updateUser(req.user._id, full_name, user_name, email, gender, phone, birth_day, address, parent_name);
            return result;
        });
    }
    ResetPassword(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cur_pwd, new_pwd } = body;
            const result = yield this.authService.resetPassword(req.user._id, new_pwd, cur_pwd);
            return result;
        });
    }
    ForgotPass(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = body;
            const result = yield this.authService.forgotPass(email);
            if (result) {
                yield this.mailQueue.add({
                    to: result.email,
                    context: {
                        user_name: result.user_name,
                        new_password: '123456',
                    },
                    title: '[Thông báo nhà trường] Thay đổi mật khẩu',
                    template: 'templates/resetpwdemail.template.hbs',
                    isCC: false,
                });
            }
            return result;
        });
    }
    GetAllUser(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.authService.getAll(req.user._id, body.searchstring, body.rowsPerpage, body.currentPage);
                return result;
            }
            catch (error) {
                this.logger.error(error.stack);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.FORBIDDEN);
            }
        });
    }
    UpdateUser(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, full_name, email, phone, gender } = body;
            let birth_day = body.birth_day;
            if (birth_day) {
                birth_day = new Date(birth_day);
            }
            const result = yield this.authService.updateUser(id, full_name, email, gender, phone, birth_day);
            return result;
        });
    }
    CreateUser(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_name, pwd, full_name, email, phone, gender } = body;
            let birth_day = body.birth_day;
            if (birth_day) {
                birth_day = new Date(birth_day);
            }
            const result = yield this.authService.addNew(user_name, pwd, full_name, gender, phone, email, birth_day);
            return result;
        });
    }
    DeleteOne(param, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.deleteOne(param.id);
        });
    }
    resetPwd(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, new_password } = req.body;
            return yield this.authService.resetUserPwd(id, new_password);
        });
    }
    GetInfor(param, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.getInfor(param.id);
        });
    }
    GetPrivilege(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.getPrivilege(req.user._id);
        });
    }
    GetAllRole(req, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authService.getAllRole();
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/reset_pass'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPass", null);
__decorate([
    (0, common_1.Post)('/logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('/infor_user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getInfor", null);
__decorate([
    (0, common_1.Get)('/statics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getStatic", null);
__decorate([
    (0, common_1.Post)('/update_infor'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new phonemail_validation_pipe_1.PhoneMailValidationPipe())),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "UpdateInfor", null);
__decorate([
    (0, common_1.Post)('/resetpassword'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ResetPassword", null);
__decorate([
    (0, common_1.Post)('/forgot_pwd'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "ForgotPass", null);
__decorate([
    (0, common_1.Post)('/alluser'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetAllUser", null);
__decorate([
    (0, common_1.Post)('/updateuser'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new phonemail_validation_pipe_1.PhoneMailValidationPipe())),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "UpdateUser", null);
__decorate([
    (0, common_1.Post)('/adduser'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new phonemail_validation_pipe_1.PhoneMailValidationPipe())),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "CreateUser", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "DeleteOne", null);
__decorate([
    (0, common_1.Post)('/reset_userpassword'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPwd", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, role_decorator_1.Roles)('root'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetInfor", null);
__decorate([
    (0, common_1.Get)('privilege'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new phonemail_validation_pipe_1.PhoneMailValidationPipe())),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetPrivilege", null);
__decorate([
    (0, common_1.Get)('allrole'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)(new phonemail_validation_pipe_1.PhoneMailValidationPipe())),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetAllRole", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __param(2, (0, bull_1.InjectQueue)('mailer')),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mail_service_1.EmailService, Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map