"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonModule = void 0;
const common_1 = require("@nestjs/common");
const lesson_service_1 = require("./lesson.service");
const lesson_controller_1 = require("./lesson.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail.service");
const lesson_schema_1 = require("./schema/lesson.schema");
let LessonModule = class LessonModule {
};
LessonModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: lesson_schema_1.T_Lesson.name,
                    schema: lesson_schema_1.LessonSchema,
                    collection: 'lessons',
                },
            ]),
        ],
        providers: [lesson_service_1.LessonService, mail_service_1.EmailService],
        controllers: [lesson_controller_1.LessonController],
        exports: [lesson_service_1.LessonService, mail_service_1.EmailService],
    })
], LessonModule);
exports.LessonModule = LessonModule;
//# sourceMappingURL=lesson.module.js.map