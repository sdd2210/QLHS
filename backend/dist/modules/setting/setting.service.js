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
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SettingService = class SettingService {
    constructor(SettingModel) {
        this.SettingModel = SettingModel;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.SettingModel.find({}) || {};
        });
    }
    getEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.SettingModel.findOne({ title: 'email' }).lean();
            return {
                email: data.details.find((x) => x.key == 'account').value,
                password: data.details.find((x) => x.key == 'password').value,
                port: data.details.find((x) => x.key == 'port').value,
                host: data.details.find((x) => x.key == 'host').value,
                secure: data.details.find((x) => x.key == 'secure').value,
                from: data.details.find((x) => x.key == 'from').value,
                cc: data.details.find((x) => x.key == 'cc').value,
                from_name: data.details.find((x) => x.key == 'from_name').value,
                timeout: data.details.find((x) => x.key == 'timeout').value,
            };
        });
    }
    updateSetting(id, details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.SettingModel.findById(id).lean();
                if (user == null) {
                    throw new common_1.HttpException('Không tìm thấy cấu hình', common_1.HttpStatus.BAD_REQUEST);
                }
                const update_detail = user.details.map((obj) => details.find((o) => o.key === obj.key) || obj);
                const data = yield this.SettingModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, {
                    details: update_detail,
                }, {
                    new: true,
                });
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
};
SettingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('m_setting')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.service.js.map