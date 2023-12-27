"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradebookModule = void 0;
const common_1 = require("@nestjs/common");
const gradebook_service_1 = require("./gradebook.service");
const gradebook_controller_1 = require("./gradebook.controller");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const gradebook_schema_1 = require("./schema/gradebook.schema");
let GradebookModule = class GradebookModule {
};
GradebookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: gradebook_schema_1.T_Gradebook.name,
                    schema: gradebook_schema_1.GradebookSchema,
                    collection: 'gradebook',
                },
            ]),
        ],
        providers: [gradebook_service_1.GradebookService],
        controllers: [gradebook_controller_1.GradebookController],
        exports: [gradebook_service_1.GradebookService],
    })
], GradebookModule);
exports.GradebookModule = GradebookModule;
//# sourceMappingURL=gradebook.module.js.map