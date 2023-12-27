"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTableModule = void 0;
const common_1 = require("@nestjs/common");
const timetable_service_1 = require("./timetable.service");
const timetable_controller_1 = require("./timetable.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail.service");
const timetable_schema_1 = require("./schema/timetable.schema");
const auth_module_1 = require("../auth/auth.module");
const lesson_module_1 = require("../lesson/lesson.module");
const employee_module_1 = require("../employee/employee.module");
let TimeTableModule = class TimeTableModule {
};
TimeTableModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: timetable_schema_1.T_TimeTable.name,
                    schema: timetable_schema_1.TimeTableSchema,
                    collection: 'timetables',
                },
            ]),
            auth_module_1.AuthModule,
            lesson_module_1.LessonModule,
            employee_module_1.EmployeeModule,
        ],
        providers: [timetable_service_1.TimeTableService, mail_service_1.EmailService],
        controllers: [timetable_controller_1.TimeTableController],
        exports: [timetable_service_1.TimeTableService, mail_service_1.EmailService],
    })
], TimeTableModule);
exports.TimeTableModule = TimeTableModule;
//# sourceMappingURL=timetable.module.js.map