"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const throttler_1 = require("@nestjs/throttler");
const configuration_1 = require("./config/configuration");
const auth_module_1 = require("./modules/auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_router_1 = require("./app.router");
const level_module_1 = require("./modules/level/level.module");
const grade_module_1 = require("./modules/grade/grade.module");
const class_module_1 = require("./modules/class/class.module");
const mailer_1 = require("@nestjs-modules/mailer");
const mailer_connect_service_1 = require("./common/mailer.connect.service");
const setting_module_1 = require("./modules/setting/setting.module");
const bull_1 = require("@nestjs/bull");
const student_module_1 = require("./modules/student/student.module");
const teacher_module_1 = require("./modules/teacher/teacher.module");
const employee_module_1 = require("./modules/employee/employee.module");
const subject_module_1 = require("./modules/subject/subject.module");
const lesson_module_1 = require("./modules/lesson/lesson.module");
const timetable_module_1 = require("./modules/timetable/timetable.module");
const schoolyear_module_1 = require("./modules/schoolyear/schoolyear.module");
const test_module_1 = require("./modules/test/test.module");
const gradebook_module_1 = require("./modules/gradebook/gradebook.module");
const room_module_1 = require("./modules/room/room.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            jwt_1.JwtModule,
            throttler_1.ThrottlerModule.forRoot({
                ttl: configuration_1.EnvConfig.Security.ThrottlerTTL,
                limit: configuration_1.EnvConfig.Security.ThrottlerLimit,
            }),
            auth_module_1.AuthModule,
            level_module_1.LevelModule,
            grade_module_1.GradeModule,
            class_module_1.ClassModule,
            setting_module_1.SettingModule,
            student_module_1.CustomerModule,
            timetable_module_1.TimeTableModule,
            schoolyear_module_1.SchoolYearModule,
            test_module_1.TestModule,
            lesson_module_1.LessonModule,
            gradebook_module_1.GradebookModule,
            room_module_1.RoomModule,
            teacher_module_1.TeacherModule,
            subject_module_1.SubjectModule,
            employee_module_1.EmployeeModule,
            core_1.RouterModule.register(app_router_1.AppRoutes),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'client'),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => __awaiter(void 0, void 0, void 0, function* () {
                    return {
                        uri: `mongodb://54.255.224.210:27017`,
                        user: 'myUserAdmin',
                        pass: 'abc123',
                        dbName: 'school',
                        useNewUrlParser: true,
                        retryWrites: true,
                        directConnection: true,
                        bufferCommands: false,
                        autoCreate: false,
                    };
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [setting_module_1.SettingModule],
                useClass: mailer_connect_service_1.MailConnectService,
            }),
            bull_1.BullModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => __awaiter(void 0, void 0, void 0, function* () {
                    return {
                        redis: {
                            host: config.get('REDIS_HOST') || 'localhost',
                            port: config.get('REDIS_PORT') || 6379,
                        },
                    };
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map