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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const regexVietnamese_1 = require("../../common/regexVietnamese");
const test_schema_1 = require("./schema/test.schema");
let TestService = class TestService {
    constructor(tTestModel) {
        this.tTestModel = tTestModel;
    }
    multiSearch(array, searchstring) {
        return array.map((x) => {
            const data = {};
            data[`${x}`] = {
                $regex: new RegExp(regexVietnamese_1.RegexCommon.regexVietnamese(searchstring)),
                $options: 'i',
            };
            return data;
        });
    }
    getAll(searchstring, class_id, status, rowsPerpage, currentPage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sortvalue = 1;
                let query = [];
                query = [
                    {
                        $match: {
                            delete_at: null,
                        },
                    },
                ];
                query.push({
                    $sort: {
                        create_at: sortvalue,
                    },
                });
                if (rowsPerpage != undefined && currentPage != undefined) {
                    query.push({ $skip: rowsPerpage * currentPage });
                    query.push({ $limit: rowsPerpage });
                }
                const data = yield this.tTestModel.aggregate(query);
                return data;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    createTest() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
};
TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(test_schema_1.T_Test.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map