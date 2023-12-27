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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const t_account_schema_1 = require("../schema/t_account.schema");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(oauthAccessToken, adminModel) {
        super({
            ignoreExpiration: false,
            secretOrKey: 'secretKey',
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    const data = request === null || request === void 0 ? void 0 : request.cookies['auth-cookie'];
                    if (!data) {
                        return null;
                    }
                    return data;
                },
            ]),
        });
        this.oauthAccessToken = oauthAccessToken;
        this.adminModel = adminModel;
    }
    validate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToken = yield this.oauthAccessToken
                .findOne({ token: payload.token })
                .lean();
            if (!userToken) {
                throw new common_1.UnauthorizedException('Token expire');
            }
            if (userToken.revoked === 1) {
                throw new common_1.UnauthorizedException('Token hết hạn');
            }
            const adminInfor = yield this.adminModel.findById(userToken.user_id);
            if (adminInfor == null || adminInfor.delete_at != null) {
                throw new common_1.UnauthorizedException('Không có tài khoản này trong hệ thống');
            }
            return {
                _id: payload.sub,
                user_name: payload.username,
                token: payload.token,
                ref_family_id: payload.ref_family_id,
                role: payload.role,
            };
        });
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('oauth_access_tokens')),
    __param(1, (0, mongoose_1.InjectModel)(t_account_schema_1.T_Account.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt-auth.strategy.js.map