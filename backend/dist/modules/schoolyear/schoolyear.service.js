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
exports.SchoolYearService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schoolyear_schema_1 = require("./schema/schoolyear.schema");
let SchoolYearService = class SchoolYearService {
    constructor(tSchoolYearModel) {
        this.tSchoolYearModel = tSchoolYearModel;
    }
    addOne(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, first_start, first_end, second_start, second_end } = body;
            const first_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(first_start)] },
                                        { $gte: ['$semester.end_date', new Date(first_start)] },
                                    ],
                                },
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(first_end)] },
                                        { $gte: ['$semester.end_date', new Date(first_end)] },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (first_semester.length > 0) {
                throw new common_1.HttpException('Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I', common_1.HttpStatus.BAD_REQUEST);
            }
            const second_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(second_start)] },
                                        { $gte: ['$semester.end_date', new Date(second_start)] },
                                    ],
                                },
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(second_end)] },
                                        { $gte: ['$semester.end_date', new Date(second_end)] },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (second_semester.length > 0) {
                throw new common_1.HttpException('Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I', common_1.HttpStatus.BAD_REQUEST);
            }
            console.log(second_semester);
            const new_data = {
                name: name,
                semester: [
                    {
                        order: 1,
                        start_date: new Date(first_start),
                        end_date: new Date(first_end),
                    },
                    {
                        order: 2,
                        start_date: new Date(second_start),
                        end_date: new Date(second_end),
                    },
                ],
            };
            const new_semester = new this.tSchoolYearModel(new_data);
            yield new_semester.save();
            return new_semester;
        });
    }
    editOne(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, first_start, first_end, second_start, second_end } = body;
            const first_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(first_start)] },
                                        { $gte: ['$semester.end_date', new Date(first_start)] },
                                    ],
                                },
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(first_end)] },
                                        { $gte: ['$semester.end_date', new Date(first_end)] },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (first_semester.length > 0) {
                throw new common_1.HttpException('Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I', common_1.HttpStatus.BAD_REQUEST);
            }
            const second_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(second_start)] },
                                        { $gte: ['$semester.end_date', new Date(second_start)] },
                                    ],
                                },
                                {
                                    $and: [
                                        { $lte: ['$semester.start_date', new Date(second_end)] },
                                        { $gte: ['$semester.end_date', new Date(second_end)] },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (second_semester.length > 0) {
                throw new common_1.HttpException('Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I', common_1.HttpStatus.BAD_REQUEST);
            }
            console.log(second_semester);
            const new_data = {
                name: name,
                semester: [
                    {
                        order: 1,
                        start_date: new Date(first_start),
                        end_date: new Date(first_end),
                    },
                    {
                        order: 2,
                        start_date: new Date(second_start),
                        end_date: new Date(second_end),
                    },
                ],
            };
            const new_semester = new this.tSchoolYearModel(new_data);
            yield new_semester.save();
            return new_semester;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [];
            query.push({ $match: { delete_at: null } });
            query.push({
                $setWindowFields: { output: { totalCount: { $count: {} } } },
            });
            const data = yield this.tSchoolYearModel.aggregate(query);
            let totalRows = 0;
            if (data.length > 0) {
                totalRows = data.length > 0 ? data[0].totalCount : 0;
                return {
                    original: data.map((x) => {
                        x.password = '';
                        return x;
                    }),
                    total: totalRows,
                };
            }
            else {
                return { original: [], total: totalRows };
            }
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tSchoolYearModel.aggregate([
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
    getCurrentSemester() {
        return __awaiter(this, void 0, void 0, function* () {
            const cur_date = new Date();
            const current_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $lte: ['$semester.start_date', cur_date] },
                                { $gte: ['$semester.end_date', cur_date] },
                            ],
                        },
                    },
                },
            ]);
            if (current_semester.length > 0) {
                return current_semester[0];
            }
            const lastest_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $and: [{ $lte: ['semester.end_date', cur_date] }],
                    },
                },
                {
                    $sort: { 'semester.end_date': -1 },
                },
            ]);
            if (lastest_semester.length > 0) {
                return lastest_semester[0];
            }
            throw new common_1.HttpException('Bạn cần bắt đầu năm học mới', common_1.HttpStatus.NOT_ACCEPTABLE);
        });
    }
    getCurrentSchoolYear() {
        return __awaiter(this, void 0, void 0, function* () {
            const cur_date = new Date();
            const current_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $lte: ['$semester.start_date', cur_date] },
                                { $gte: ['$semester.end_date', cur_date] },
                            ],
                        },
                    },
                },
            ]);
            if (current_semester.length > 0) {
                return current_semester[0];
            }
            const lastest_semester = yield this.tSchoolYearModel.aggregate([
                { $unwind: '$semester' },
                {
                    $match: {
                        $and: [{ $lte: ['semester.end_date', cur_date] }],
                    },
                },
                {
                    $sort: { 'semester.end_date': -1 },
                },
            ]);
            if (lastest_semester.length > 0) {
                return lastest_semester[0];
            }
            throw new common_1.HttpException('Bạn cần bắt đầu năm học mới', common_1.HttpStatus.NOT_ACCEPTABLE);
        });
    }
};
SchoolYearService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schoolyear_schema_1.T_SchoolYear.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SchoolYearService);
exports.SchoolYearService = SchoolYearService;
//# sourceMappingURL=schoolyear.service.js.map