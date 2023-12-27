"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("./employee.service");
const employee_controller_1 = require("./employee.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail.service");
const employee_schema_1 = require("./schema/employee.schema");
const auth_module_1 = require("../auth/auth.module");
const subject_module_1 = require("../subject/subject.module");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: employee_schema_1.T_Employee.name,
                    schema: employee_schema_1.EmployeeSchema,
                    collection: 'employee',
                },
            ]),
            auth_module_1.AuthModule,
            subject_module_1.SubjectModule,
        ],
        providers: [employee_service_1.EmployeeService, mail_service_1.EmailService],
        controllers: [employee_controller_1.EmployeeController],
        exports: [employee_service_1.EmployeeService, mail_service_1.EmailService],
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map