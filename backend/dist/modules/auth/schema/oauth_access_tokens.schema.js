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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthAccessTokenSchema = exports.OauthAccessToken = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let OauthAccessToken = class OauthAccessToken {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OauthAccessToken.prototype, "token", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OauthAccessToken.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], OauthAccessToken.prototype, "ref_family_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], OauthAccessToken.prototype, "revoked", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], OauthAccessToken.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], OauthAccessToken.prototype, "updated_at", void 0);
OauthAccessToken = __decorate([
    (0, mongoose_1.Schema)()
], OauthAccessToken);
exports.OauthAccessToken = OauthAccessToken;
exports.OauthAccessTokenSchema = mongoose_1.SchemaFactory.createForClass(OauthAccessToken);
//# sourceMappingURL=oauth_access_tokens.schema.js.map