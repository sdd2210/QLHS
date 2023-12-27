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
exports.TimeTableController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const timetable_service_1 = require("./timetable.service");
const app_controller_1 = require("../../app.controller");
const custom_logger_1 = require("../../common/custom.logger");
const role_guard_1 = require("../auth/guards/role.guard");
const auth_service_1 = require("../auth/auth.service");
let TimeTableController = class TimeTableController extends app_controller_1.AppController {
    constructor(customerService, authService) {
        super();
        this.customerService = customerService;
        this.authService = authService;
        this.logger = new custom_logger_1.LoggerService();
    }
    getAll(req, body) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getbyClass(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.customerService.getByClass(body.class_id, body.current_date);
            return data;
        });
    }
    getbyEmployee(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.customerService.getByEmployee(body.employee_id, body.current_date);
            return data;
        });
    }
    createOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { employee_id, SubjectId, date, end_date, lesson, workday, class_id, room_id, } = body;
            const data = yield this.customerService.addLessontoClass(class_id, employee_id, SubjectId, new Date(date), new Date(end_date), lesson, workday, room_id);
            return data;
        });
    }
    updateOne(req, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { EmployeeId, SubjectId, startdate, enddate, lesson_id, order, class_id, RoomId, } = body;
            const data = yield this.customerService.editLessontoClass(class_id, EmployeeId, SubjectId, new Date(startdate), new Date(enddate), lesson_id, order, RoomId);
            return data;
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
], TimeTableController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('/getbyClass'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "getbyClass", null);
__decorate([
    (0, common_1.Post)('/getbyEmployee'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "getbyEmployee", null);
__decorate([
    (0, common_1.Post)('/add_new'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TimeTableController.prototype, "updateOne", null);
TimeTableController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [timetable_service_1.TimeTableService,
        auth_service_1.AuthService])
], TimeTableController);
exports.TimeTableController = TimeTableController;
//# sourceMappingURL=timetable.controller.js.map