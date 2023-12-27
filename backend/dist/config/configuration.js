"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EnvConfig_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
dotenv.config();
let EnvConfig = EnvConfig_1 = class EnvConfig {
};
EnvConfig.getDatabase = () => {
    const host = process.env.DB_HOST || 'localhost';
    const port = parseInt(process.env.DB_PORT, 10) || 27017;
    return {
        Uri: `mongodb://${host}:${port}`,
        Host: host,
        Port: port,
        DBname: process.env.DB_NAME || undefined,
        User: process.env.DB_USER || undefined,
        Pwd: process.env.DB_PWD || undefined,
    };
};
EnvConfig.getSecurity = () => {
    return {
        ThrottlerTTL: parseInt(process.env.THROTTLER_TTL) || 60,
        ThrottlerLimit: parseInt(process.env.THROTTLER_LIMIT) || 60,
    };
};
EnvConfig.getCache = () => {
    return {
        Host: process.env.CACHE_HOST || 'localhost',
        Port: parseInt(process.env.CACHE_PORT, 10) || 6379,
    };
};
EnvConfig.AppPort = parseInt(process.env.APP_PORT || '3000', 10);
EnvConfig.Database = EnvConfig_1.getDatabase();
EnvConfig.Cache = EnvConfig_1.getCache();
EnvConfig.Security = EnvConfig_1.getSecurity();
EnvConfig.reCaptchaKey = process.env.RECAPTCHA_KEY || '';
EnvConfig.maxUploadDocs = parseInt(process.env.MAX_UPLOAD_DOCS || '10000000');
EnvConfig.maxUploadFolder = parseInt(process.env.MAX_UPLOAD_FOLDER || '100');
EnvConfig.PathUploadRoot = process.env.PATH_UPLOAD || '';
EnvConfig = EnvConfig_1 = __decorate([
    (0, common_1.Injectable)()
], EnvConfig);
exports.EnvConfig = EnvConfig;
//# sourceMappingURL=configuration.js.map