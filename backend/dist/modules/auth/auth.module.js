"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const t_account_schema_1 = require("./schema/t_account.schema");
const auth_service_1 = require("./auth.service");
const jwt_auth_strategy_1 = require("./strategies/jwt-auth.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const oauth_access_tokens_schema_1 = require("./schema/oauth_access_tokens.schema");
const passport_1 = require("@nestjs/passport");
const mail_service_1 = require("../../common/mail.service");
const bull_1 = require("@nestjs/bull");
const mail_processer_1 = require("../../queues/mail.processer");
const role_schema_1 = require("./schema/role.schema");
const schoolyear_module_1 = require("../schoolyear/schoolyear.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: t_account_schema_1.T_Account.name,
                    schema: t_account_schema_1.AccountSchema,
                    collection: 't_account',
                },
                {
                    name: role_schema_1.Role.name,
                    schema: role_schema_1.RoleSchema,
                    collection: 'roles',
                },
                {
                    name: 'oauth_access_tokens',
                    schema: oauth_access_tokens_schema_1.OauthAccessTokenSchema,
                    collection: 'oauth_access_tokens',
                },
            ]),
            passport_1.PassportModule,
            schoolyear_module_1.SchoolYearModule,
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '60000s' },
            }),
            bull_1.BullModule.registerQueue({
                name: 'mailer',
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_auth_strategy_1.JwtStrategy,
            mail_service_1.EmailService,
            mail_processer_1.AudioProcessor,
        ],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map