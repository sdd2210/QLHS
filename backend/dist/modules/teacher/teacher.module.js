"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModule = void 0;
const common_1 = require("@nestjs/common");
const teacher_service_1 = require("./teacher.service");
const teacher_controller_1 = require("./teacher.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail.service");
const teacher_schema_1 = require("./schema/teacher.schema");
const auth_module_1 = require("../auth/auth.module");
let TeacherModule = class TeacherModule {
};
TeacherModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: teacher_schema_1.T_Teacher.name,
                    schema: teacher_schema_1.TeacherSchema,
                    collection: 'teachers',
                },
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [teacher_service_1.TeacherService, mail_service_1.EmailService],
        controllers: [teacher_controller_1.TeacherController],
        exports: [teacher_service_1.TeacherService, mail_service_1.EmailService],
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.module.js.map