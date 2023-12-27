"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
exports.MailConnectService = void 0;
const common_1 = require("@nestjs/common");
const setting_service_1 = require("../modules/setting/setting.service");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const custom_logger_1 = require("./custom.logger");
let MailConnectService = class MailConnectService {
    constructor(config) {
        this.config = config;
        this.logger = new custom_logger_1.LoggerService();
    }
    createMailerOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const settingParam = yield this.config.getEmail();
                return {
                    transport: {
                        host: settingParam.host,
                        port: settingParam.port,
                        auth: {
                            user: settingParam.email,
                            pass: settingParam.password,
                        },
                        secure: settingParam.secure,
                        connectionTimeout: settingParam.timeout,
                    },
                    defaults: {
                        from: `"${settingParam.from_name}" <${settingParam.from}>`,
                        cc: settingParam.cc,
                    },
                    template: {
                        dir: __dirname + '/templates',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(undefined, {
                            inlineCssEnabled: true,
                            inlineCssOptions: { url: ' ' },
                        }),
                        options: {
                            strict: true,
                        },
                    },
                    options: {
                        strict: true,
                    },
                };
            }
            catch (error) {
                this.logger.error(error.message);
                throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
};
MailConnectService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], MailConnectService);
exports.MailConnectService = MailConnectService;
//# sourceMappingURL=mailer.connect.service.js.map