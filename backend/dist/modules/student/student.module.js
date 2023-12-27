"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const student_controller_1 = require("./student.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail.service");
const student_schema_1 = require("./schema/student.schema");
const auth_module_1 = require("../auth/auth.module");
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: student_schema_1.T_Student.name,
                    schema: student_schema_1.StudentSchema,
                    collection: 'students',
                },
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [student_service_1.CustomerService, mail_service_1.EmailService],
        controllers: [student_controller_1.CustomerController],
        exports: [student_service_1.CustomerService, mail_service_1.EmailService],
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=student.module.js.map