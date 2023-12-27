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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const class_schema_1 = require("./schema/class.schema");
const date_fns_1 = require("date-fns");
const auth_service_1 = require("../auth/auth.service");
const regexVietnamese_1 = require("../../common/regexVietnamese");
let ClassService = class ClassService {
    constructor(tClassModel, authService) {
        this.tClassModel = tClassModel;
        this.authService = authService;
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
    getAll(grade_id = 'all', grade_key = 'all', searchstring, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = [];
            query.push({ $match: { delete_at: null } });
            if (grade_id != 'all') {
                query.push({
                    $lookup: {
                        from: 'grades',
                        localField: 'grade_id',
                        foreignField: '_id',
                        as: 'grade_infor',
                        pipeline: [
                            {
                                $match: {
                                    _id: new mongoose_2.Types.ObjectId(grade_id),
                                },
                            },
                        ],
                    },
                });
                query.push({
                    $unwind: '$grade_infor',
                });
            }
            if (grade_key != 'all') {
                query.push({
                    $lookup: {
                        from: 'grades',
                        localField: 'grade_id',
                        foreignField: '_id',
                        as: 'grade_infor',
                        pipeline: [
                            {
                                $match: {
                                    grade_key: grade_key,
                                },
                            },
                        ],
                    },
                });
                query.push({
                    $unwind: '$grade_infor',
                });
            }
            if (user_id) {
                const user_infor = yield this.authService.getUser(user_id);
                const match_field = {};
                match_field[`${user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee'}.account_id`] = new mongoose_2.Types.ObjectId(user_id);
                query = query.concat([
                    {
                        $graphLookup: {
                            from: user_infor.role_key == 'STUDENTS' ? 'students' : 'employee',
                            startWith: '$_id',
                            connectFromField: '_id',
                            connectToField: 'class_list.class_id',
                            as: user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee',
                        },
                    },
                    {
                        $unwind: `$${user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee'}`,
                    },
                    {
                        $match: Object.assign({ delete_at: null }, match_field),
                    },
                ]);
            }
            query = query.concat([
                {
                    $match: {
                        $or: this.multiSearch(['name'], searchstring),
                    },
                },
                {
                    $lookup: {
                        from: 'students',
                        localField: '_id',
                        foreignField: 'class_id',
                        as: 'students',
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
                    $set: {
                        studentCount: {
                            $size: '$students',
                        },
                    },
                },
                {
                    $unset: ['class'],
                },
            ]);
            const data = yield this.tClassModel.aggregate(query);
            return data;
        });
    }
    addNew(class_name, grade_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    name: class_name,
                    status: 'RUNNING',
                    grade_id: new mongoose_2.Types.ObjectId(grade_id),
                    start_from: new Date(),
                    end_to: (0, date_fns_1.addYears)(new Date(), 1),
                };
                const newadmin = yield new this.tClassModel(Object.assign({}, data));
                const adminresult = yield newadmin.save();
                return adminresult;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.tClassModel.findById(id).exec();
            const raw = user.toObject();
            return raw;
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tClassModel.aggregate([
                {
                    $lookup: {
                        from: 'students',
                        localField: '_id',
                        foreignField: 'class_id',
                        as: 'students',
                    },
                },
                {
                    $set: {
                        studentCount: {
                            $size: '$students',
                        },
                    },
                },
                {
                    $unset: ['class'],
                },
            ]);
            return data;
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = [];
                query.push({ $match: { delete_at: null, _id: new mongoose_2.Types.ObjectId(id) } });
                query = query.concat([
                    {
                        $lookup: {
                            from: 'students',
                            localField: '_id',
                            foreignField: 'class_id',
                            as: 'students',
                        },
                    },
                    {
                        $set: {
                            studentCount: {
                                $size: '$students',
                            },
                        },
                    },
                    {
                        $unset: ['class'],
                    },
                ]);
                const check = yield this.tClassModel.aggregate(query);
                if (check.length > 0) {
                    if (check[0].studentCount > 0) {
                        throw new common_1.HttpException('Không thể xóa lớp có thành viên', common_1.HttpStatus.FORBIDDEN);
                    }
                }
                const data = yield this.tClassModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, {
                    delete_at: new Date(),
                });
                console.log(data);
                if (data != null) {
                    return data;
                }
                else {
                    throw new common_1.HttpException('Không tìm thấy lớp', common_1.HttpStatus.FORBIDDEN);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
};
ClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(class_schema_1.T_Class.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map