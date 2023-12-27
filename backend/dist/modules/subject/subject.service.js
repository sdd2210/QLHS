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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const subject_schema_1 = require("./schema/subject.schema");
const grade_service_1 = require("../grade/grade.service");
const regexVietnamese_1 = require("../../common/regexVietnamese");
let SubjectService = class SubjectService {
    constructor(tSubjectModel, gradeService) {
        this.tSubjectModel = tSubjectModel;
        this.gradeService = gradeService;
    }
    getAll(grade_id = 'all') {
        return __awaiter(this, void 0, void 0, function* () {
            let query = [];
            query.push({ $match: { delete_at: null } });
            if (grade_id != 'all') {
                query.push({ $match: { grade_id: new mongoose_2.Types.ObjectId(grade_id) } });
            }
            query = query.concat([
                {
                    $lookup: {
                        from: 'employee',
                        localField: '_id',
                        foreignField: 'subject_id',
                        as: 'employee',
                    },
                },
                {
                    $set: {
                        count: { $size: '$employee' },
                    },
                },
                {
                    $unset: ['employee'],
                },
            ]);
            const data = yield this.tSubjectModel.aggregate(query);
            return data;
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tSubjectModel.aggregate([
                {
                    $lookup: {
                        from: 'classes',
                        localField: '_id',
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
                    $unset: ['students', 'class'],
                },
            ]);
            return data;
        });
    }
    getInforByAlias(subject_key) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tSubjectModel.findOne({
                delete_at: null,
                subject_id: subject_key,
            });
            return data || { _id: '' };
        });
    }
    getCommon() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tSubjectModel.find({
                grade_id: null,
            });
            return data;
        });
    }
    createOne(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { grade_id, name, description } = body;
            const dataGrade = yield this.gradeService.getInfor(grade_id);
            const prefix = dataGrade.grade_key.split('-')[0];
            const suffix = regexVietnamese_1.RegexCommon.regexVietnameseNor(name.replace(' ', '').trim().toLowerCase());
            if (grade_id && name.length > 0) {
                const new_data = new this.tSubjectModel({
                    name,
                    subject_id: `lop${prefix}-${suffix}`,
                    description: description,
                    status: true,
                    grade_id: new mongoose_2.Types.ObjectId(grade_id),
                });
                yield new_data.save();
                return new_data;
            }
        });
    }
    deleteOne(grade_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tSubjectModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(grade_id) }, {
                delete_at: new Date(),
            });
            return data;
        });
    }
    editOne(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { grade_id, name, description } = body;
            const dataGrade = yield this.gradeService.getInfor(grade_id);
            const prefix = dataGrade.grade_key.split('-')[0];
            const suffix = regexVietnamese_1.RegexCommon.regexVietnameseNor(name.replace(' ', '').trim().toLowerCase());
            const data = yield this.tSubjectModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, {
                name: name,
                description: description,
                subject_id: `lop${prefix}-${suffix}`,
            }, {
                new: true,
            });
            return data;
        });
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subject_schema_1.T_Subject.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        grade_service_1.GradeService])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map