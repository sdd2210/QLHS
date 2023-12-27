"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolYearModule = void 0;
const common_1 = require("@nestjs/common");
const schoolyear_service_1 = require("./schoolyear.service");
const schoolyear_controller_1 = require("./schoolyear.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const schoolyear_schema_1 = require("./schema/schoolyear.schema");
let SchoolYearModule = class SchoolYearModule {
};
SchoolYearModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schoolyear_schema_1.T_SchoolYear.name,
                    schema: schoolyear_schema_1.SchoolYearSchema,
                    collection: 'schoolyear',
                },
            ]),
        ],
        providers: [schoolyear_service_1.SchoolYearService],
        controllers: [schoolyear_controller_1.SchoolYearController],
        exports: [schoolyear_service_1.SchoolYearService],
    })
], SchoolYearModule);
exports.SchoolYearModule = SchoolYearModule;
//# sourceMappingURL=schoolyear.module.js.map