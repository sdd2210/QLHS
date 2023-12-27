"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingModule = void 0;
const common_1 = require("@nestjs/common");
const setting_service_1 = require("./setting.service");
const setting_controller_1 = require("./setting.controller");
const mongoose_1 = require("@nestjs/mongoose");
const setting_schema_1 = require("./schema/setting.schema");
const config_1 = require("@nestjs/config");
const mailer_1 = require("@nestjs-modules/mailer");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'm_setting',
                    schema: setting_schema_1.SettingSchema,
                    collection: 'm_setting',
                },
            ]),
            mailer_1.MailerModule,
        ],
        providers: [setting_service_1.SettingService],
        controllers: [setting_controller_1.SettingController],
        exports: [setting_service_1.SettingService],
    })
], SettingModule);
exports.SettingModule = SettingModule;
//# sourceMappingURL=setting.module.js.map