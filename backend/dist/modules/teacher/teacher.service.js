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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const regexVietnamese_1 = require("../../common/regexVietnamese");
const teacher_schema_1 = require("./schema/teacher.schema");
let TeacherService = class TeacherService {
    constructor(tTeacherModel) {
        this.tTeacherModel = tTeacherModel;
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
                    {
                        $lookup: {
                            from: 't_account',
                            localField: 'account_id',
                            foreignField: '_id',
                            as: 'account',
                            pipeline: [
                                {
                                    $match: {
                                        delete_at: null,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        $unwind: '$account',
                    },
                    {
                        $lookup: {
                            from: 'classes',
                            localField: 'class_id',
                            foreignField: '_id',
                            as: 'class',
                            pipeline: [
                                {
                                    $match: {
                                        delete_at: null,
                                    },
                                },
                            ],
                        },
                    },
                    {
                        $unwind: '$class',
                    },
                    {
                        $set: {
                            teacher_code: {
                                $concat: [
                                    '$teacher_alias_string',
                                    {
                                        $substrCP: [
                                            {
                                                $add: [10000, '$teacher_alias_number'],
                                            },
                                            1,
                                            5,
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    {
                        $match: {
                            $or: this.multiSearch(['full_name', 'email', 'phone', 'teacher_code'], searchstring),
                        },
                    },
                ];
                if (class_id != 'all') {
                    query.push({
                        $match: { class_id: new mongoose_2.Types.ObjectId(class_id) },
                    });
                }
                query.push({
                    $setWindowFields: { output: { totalCount: { $count: {} } } },
                });
                query.push({
                    $sort: {
                        create_at: sortvalue,
                    },
                });
                if (rowsPerpage != undefined && currentPage != undefined) {
                    query.push({ $skip: rowsPerpage * currentPage });
                    query.push({ $limit: rowsPerpage });
                }
                console.log(JSON.stringify(query));
                const data = yield this.tTeacherModel.aggregate(query);
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
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    createTeacher(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { full_name, email, parent_name, account_id, address, class_id } = body;
            const check_teacher = yield this.tTeacherModel.findOne({
                email,
                class_id,
                full_name,
            });
            if (check_teacher) {
                throw new common_1.HttpException('Tài khoản này đã được đăng kí!', common_1.HttpStatus.BAD_REQUEST);
            }
            const max_data = yield this.tTeacherModel
                .find()
                .sort({ teacher_alias_number: -1 })
                .limit(1);
            const new_data = {
                account_id,
                class_id: new mongoose_2.Types.ObjectId(class_id),
                parent_name,
                address,
                teacher_alias_string: new Date().getFullYear().toString(),
                teacher_alias_number: max_data[0]
                    ? max_data[0].teacher_alias_number
                    : 0 + 1,
                create_at: new Date(),
                class_list: [],
            };
            const new_teacher = yield new this.tTeacherModel(Object.assign({}, new_data));
            yield new_teacher.save();
            const class_infor = yield this.tTeacherModel.aggregate([
                {
                    $match: {
                        _id: new_teacher._id,
                    },
                },
                {
                    $lookup: {
                        from: 'classes',
                        localField: 'class_id',
                        foreignField: '_id',
                        as: 'class',
                        pipeline: [
                            {
                                $match: {
                                    delete_at: null,
                                },
                            },
                        ],
                    },
                },
                {
                    $unwind: '$class',
                },
            ]);
            new_teacher.class_list = [
                {
                    class_id: class_infor[0].class._id,
                    start_date: class_infor[0].class.start_from,
                    end_date: class_infor[0].class.end_to,
                },
            ];
            new_teacher.save();
            return new_teacher;
        });
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(teacher_schema_1.T_Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map