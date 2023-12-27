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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const regexVietnamese_1 = require("../../common/regexVietnamese");
const employee_schema_1 = require("./schema/employee.schema");
let EmployeeService = class EmployeeService {
    constructor(tEmployeeModel) {
        this.tEmployeeModel = tEmployeeModel;
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
    getAll(searchstring, subject_id, status, rowsPerpage, currentPage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sortvalue = 1;
                let query = [];
                const subject_query = {
                    $lookup: {
                        from: 'subjects',
                        localField: 'subject_id',
                        foreignField: '_id',
                        as: 'subjects',
                        pipeline: [
                            {
                                $match: {
                                    delete_at: null,
                                },
                            },
                        ],
                    },
                };
                if (subject_id) {
                    subject_query['$lookup']['pipeline'].push({
                        $match: {
                            _id: new mongoose_2.Types.ObjectId(subject_id),
                        },
                    });
                }
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
                        $set: {
                            employee_code: {
                                $concat: [
                                    '$employee_alias_string',
                                    {
                                        $substrCP: [
                                            {
                                                $add: [10000, '$employee_alias_number'],
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
                            $or: this.multiSearch(['full_name', 'email', 'phone', 'employee_code'], searchstring),
                        },
                    },
                    subject_query,
                    {
                        $unwind: '$subjects',
                    },
                    {
                        $lookup: {
                            from: 'grades',
                            localField: 'subjects.grade_id',
                            foreignField: '_id',
                            as: 'grades',
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
                        $unwind: '$grades',
                    },
                ];
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
                const data = yield this.tEmployeeModel.aggregate(query);
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
    getInfor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tEmployeeModel.find({
                account_id: new mongoose_2.Types.ObjectId(id),
            });
            return data;
        });
    }
    createEmployee(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { full_name, email, parent_name, account_id, address, subject_id } = body;
            const check_employee = yield this.tEmployeeModel.findOne({
                email,
                subject_id,
                full_name,
            });
            if (check_employee) {
                throw new common_1.HttpException('Tài khoản này đã được đăng kí!', common_1.HttpStatus.BAD_REQUEST);
            }
            const max_data = yield this.tEmployeeModel
                .find()
                .sort({ employee_alias_number: -1 })
                .limit(1);
            const new_data = {
                account_id,
                subject_id: new mongoose_2.Types.ObjectId(subject_id),
                class_list: [],
                parent_name,
                address,
                employee_alias_string: new Date().getFullYear().toString(),
                employee_alias_number: max_data[0]
                    ? max_data[0].employee_alias_number
                    : 0 + 1,
                create_at: new Date(),
            };
            const new_employee = yield new this.tEmployeeModel(Object.assign({}, new_data));
            yield new_employee.save();
            return new_employee;
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.tEmployeeModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, {
                    delete_at: new Date(),
                });
                console.log(data);
                if (data != null) {
                    return data;
                }
                else {
                    throw new common_1.HttpException('Không tìm thấy nhân viên', common_1.HttpStatus.FORBIDDEN);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    addClass(employ_id, class_id, start_date, end_date) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tEmployeeModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(employ_id) }, {
                $addToSet: {
                    class_list: {
                        class_id: new mongoose_2.Types.ObjectId(class_id),
                        start_date: new Date(start_date),
                        end_date: new Date(end_date),
                    },
                },
            });
            return data;
        });
    }
    deleteClass(employ_id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tEmployeeModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(employ_id) }, {
                $pull: { $elemMatch: { class_id: new mongoose_2.Types.ObjectId(class_id) } },
            });
            return data;
        });
    }
    updateEmployee(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { subject_id, address } = body;
            const check_student = yield this.tEmployeeModel.findOne({
                _id: new mongoose_2.Types.ObjectId(id),
            });
            if (!check_student) {
                throw new common_1.HttpException('Tài khoản này không tồn tại!', common_1.HttpStatus.BAD_REQUEST);
            }
            if (check_student.class_list.length > 0 &&
                subject_id != check_student.subject_id.toString()) {
                throw new common_1.HttpException('Giáo viên đang giải dạy môn cũ. Không thể cập nhật môn dạy của giáo viên', common_1.HttpStatus.BAD_REQUEST);
            }
            const data = yield this.tEmployeeModel
                .findOneAndUpdate({
                _id: new mongoose_2.Types.ObjectId(id),
            }, {
                $set: { subject_id: new mongoose_2.Types.ObjectId(subject_id), address },
            })
                .lean();
            return data;
        });
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employee_schema_1.T_Employee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map