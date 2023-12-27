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
exports.LevelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const level_schema_1 = require("./schema/level.schema");
let LevelService = class LevelService {
    constructor(tLevelModel) {
        this.tLevelModel = tLevelModel;
    }
    getAll(grade_key = 'all') {
        return __awaiter(this, void 0, void 0, function* () {
            let query = [];
            query.push({ $match: { delete_at: null } });
            if (grade_key) {
                query.push({
                    $lookup: {
                        from: 'grades',
                        localField: '_id',
                        foreignField: 'level_id',
                        as: 'grade_infor',
                        pipeline: [{ $match: { grade_key } }],
                    },
                });
            }
            else {
                query.push({
                    $lookup: {
                        from: 'grades',
                        localField: '_id',
                        foreignField: 'level_id',
                        as: 'grade_infor',
                    },
                });
            }
            query.push({
                $set: {
                    gradeCount: { $size: '$grade_infor' },
                    classCount: 10,
                    studentCount: 100,
                },
            });
            query = query.concat([
                {
                    $lookup: {
                        from: 'grades',
                        localField: '_id',
                        foreignField: 'level_id',
                        as: 'grade',
                    },
                },
                {
                    $lookup: {
                        from: 'classes',
                        localField: 'grade._id',
                        foreignField: 'grade_id',
                        as: 'class',
                    },
                },
                {
                    $lookup: {
                        from: 'students',
                        localField: 'class._id',
                        foreignField: 'class_id',
                        as: 'students',
                    },
                },
                {
                    $set: {
                        studentCount: {
                            $size: '$students',
                        },
                        classCount: {
                            $size: '$class',
                        },
                    },
                },
                {
                    $unset: ['students', 'class', 'grade'],
                },
            ]);
            const data = yield this.tLevelModel.aggregate(query);
            return data;
        });
    }
    getInforByGrade(grade_key) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tLevelModel.aggregate([
                {
                    $lookup: {
                        from: 'grades',
                        localField: '_id',
                        foreignField: 'level_id',
                        as: 'grade_infor',
                        pipeline: [{ $match: { grade_key } }],
                    },
                },
                {
                    $unwind: '$grade_infor',
                },
            ]);
            return data;
        });
    }
    getInforByKey(level_key) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tLevelModel.findOne({ level_key: level_key });
            return data;
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tLevelModel.aggregate([
                {
                    $lookup: {
                        from: 'grades',
                        localField: '_id',
                        foreignField: 'level_id',
                        as: 'grade',
                    },
                },
                {
                    $lookup: {
                        from: 'classes',
                        localField: 'grade._id',
                        foreignField: 'grade_id',
                        as: 'class',
                    },
                },
                {
                    $lookup: {
                        from: 'students',
                        localField: 'class._id',
                        foreignField: 'class_id',
                        as: 'students',
                    },
                },
                {
                    $set: {
                        studentCount: {
                            $size: '$students',
                        },
                        classCount: {
                            $size: '$class',
                        },
                    },
                },
                {
                    $unset: ['students', 'class', 'grade'],
                },
            ]);
            return data;
        });
    }
};
LevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(level_schema_1.T_Level.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LevelService);
exports.LevelService = LevelService;
//# sourceMappingURL=level.service.js.map