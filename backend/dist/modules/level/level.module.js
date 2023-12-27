"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelModule = void 0;
const common_1 = require("@nestjs/common");
const level_service_1 = require("./level.service");
const level_controller_1 = require("./level.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const level_schema_1 = require("./schema/level.schema");
const grade_service_1 = require("../grade/grade.service");
const grade_schema_1 = require("../grade/schema/grade.schema");
let LevelModule = class LevelModule {
};
LevelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: level_schema_1.T_Level.name,
                    schema: level_schema_1.LevelSchema,
                    collection: 'levels',
                },
                {
                    name: grade_schema_1.T_Grade.name,
                    schema: grade_schema_1.GradeSchema,
                    collection: 'grades',
                },
            ]),
        ],
        providers: [level_service_1.LevelService, grade_service_1.GradeService],
        controllers: [level_controller_1.LevelController],
        exports: [level_service_1.LevelService],
    })
], LevelModule);
exports.LevelModule = LevelModule;
//# sourceMappingURL=level.module.js.map