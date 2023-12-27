"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeModule = void 0;
const common_1 = require("@nestjs/common");
const grade_service_1 = require("./grade.service");
const grade_controller_1 = require("./grade.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const grade_schema_1 = require("./schema/grade.schema");
let GradeModule = class GradeModule {
};
GradeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: grade_schema_1.T_Grade.name,
                    schema: grade_schema_1.GradeSchema,
                    collection: 'grades',
                },
            ]),
        ],
        providers: [grade_service_1.GradeService],
        controllers: [grade_controller_1.GradeController],
        exports: [grade_service_1.GradeService],
    })
], GradeModule);
exports.GradeModule = GradeModule;
//# sourceMappingURL=grade.module.js.map