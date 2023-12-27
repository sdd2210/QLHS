"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const class_schema_1 = require("./schema/class.schema");
const class_controller_1 = require("./class.controller");
const class_service_1 = require("./class.service");
const auth_module_1 = require("../auth/auth.module");
let ClassModule = class ClassModule {
};
ClassModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: class_schema_1.T_Class.name,
                    schema: class_schema_1.ClassSchema,
                    collection: 'classes',
                },
            ]),
            auth_module_1.AuthModule,
        ],
        providers: [class_service_1.ClassService],
        controllers: [class_controller_1.ClassController],
        exports: [class_service_1.ClassService],
    })
], ClassModule);
exports.ClassModule = ClassModule;
//# sourceMappingURL=class.module.js.map