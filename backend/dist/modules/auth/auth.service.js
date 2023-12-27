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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const t_account_schema_1 = require("./schema/t_account.schema");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const regexVietnamese_1 = require("../../common/regexVietnamese");
const role_schema_1 = require("./schema/role.schema");
const schoolyear_service_1 = require("../schoolyear/schoolyear.service");
let AuthService = class AuthService {
    constructor(tAccountModel, tRoleModel, oauthAccessToken, jwtService, semesterService) {
        this.tAccountModel = tAccountModel;
        this.tRoleModel = tRoleModel;
        this.oauthAccessToken = oauthAccessToken;
        this.jwtService = jwtService;
        this.semesterService = semesterService;
    }
    logIn(userLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!userLogin || userLogin.delete_at) {
                    throw new common_1.UnauthorizedException();
                }
                const payload = {
                    username: userLogin.user_name,
                    sub: userLogin._id,
                    token: (0, uuid_1.v4)(),
                    ref_family_id: userLogin.ref_family_id,
                    role_key: userLogin.role_key,
                    full_name: userLogin.full_name,
                };
                if (userLogin.is_reset) {
                    const raw = userLogin.toObject();
                    return {
                        user: raw,
                    };
                }
                const newOauthAccess = new this.oauthAccessToken({
                    token: payload.token,
                    user_id: userLogin._id,
                    full_name: userLogin.full_name,
                    revoked: 0,
                });
                newOauthAccess.save();
                const raw = userLogin.toObject();
                delete raw.password;
                return {
                    accessToken: this.jwtService.sign(payload),
                    user: raw,
                    semester: yield this.semesterService.getCurrentSemester(),
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
    validateUser(user_name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (user_name != '' &&
                user_name != null &&
                password != '' &&
                password != null) {
                const user = yield this.tAccountModel
                    .findOne({
                    user_name: user_name,
                    delete_at: null,
                })
                    .exec();
                if (user && bcrypt.compareSync(password, user.password)) {
                    return user;
                }
            }
            return null;
        });
    }
    onRevokeToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oauthAccessToken.deleteOne({ token });
            return true;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.tAccountModel.findById(id).exec();
            const raw = user.toObject();
            delete raw.password;
            return raw;
        });
    }
    updateUser(id, full_name, user_name, email, gender, phone, birth_day, address, parent_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tAccountModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id), delete_at: null }, {
                user_name: user_name,
                full_name,
                email,
                birth_day,
                gender,
                phone,
            }, { new: true });
            let table_name;
            switch (data.role_key) {
                case 'STUDENTS':
                    table_name = 'students';
                    break;
                case 'TEACHER':
                    table_name = 'teachers';
                    break;
                case 'TEACHER2':
                    table_name = 'employee';
                    break;
                default:
                    break;
            }
            let data_update = {};
            if (address) {
                data_update = Object.assign(data_update, { address });
            }
            if (parent_name) {
                data_update = Object.assign(data_update, { parent_name });
            }
            if (data_update) {
                yield this.tAccountModel.aggregate([
                    {
                        $match: {
                            _id: data._id,
                        },
                    },
                    {
                        $lookup: {
                            from: table_name,
                            localField: '_id',
                            foreignField: 'account_id',
                            as: table_name,
                            pipeline: [
                                {
                                    $match: {
                                        delete_at: null,
                                    },
                                },
                            ],
                        },
                    },
                    { $unwind: `$${table_name}` },
                    { $replaceRoot: { newRoot: `$${table_name}` } },
                    {
                        $set: data_update,
                    },
                    {
                        $merge: {
                            into: table_name,
                            on: '_id',
                            whenMatched: 'merge',
                            whenNotMatched: 'fail',
                        },
                    },
                ]);
            }
            return data;
        });
    }
    resetPassword(id, new_pwd, cur_pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashPwd = yield bcrypt.hashSync(new_pwd, 10);
                const user = yield this.tAccountModel
                    .findOne({
                    _id: new mongoose_2.Types.ObjectId(id),
                    delete_at: null,
                })
                    .exec();
                if (user && bcrypt.compareSync(cur_pwd, user.password)) {
                    const rst = yield this.tAccountModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, { password: hashPwd }, { new: true });
                    if (rst) {
                        return true;
                    }
                }
                else {
                    throw new common_1.HttpException('Không đúng mật khẩu cũ', common_1.HttpStatus.FORBIDDEN);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    forgotPass(email, new_pwd = '123456') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashPwd = yield bcrypt.hashSync(new_pwd, 10);
                const rst = yield this.tAccountModel
                    .findOneAndUpdate({ email: email }, { password: hashPwd, is_reset: true }, { new: true })
                    .lean();
                if (rst) {
                    return rst;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    reCreatePass(id, new_pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashPwd = yield bcrypt.hashSync(new_pwd, 10);
                const rst = yield this.tAccountModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id), is_reset: true }, { password: hashPwd, is_reset: false }, { new: true });
                if (rst) {
                    const res = yield this.logIn(rst);
                    return res;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAll(idUser, searchstring, rowsPerpage, currentPage) {
        return __awaiter(this, void 0, void 0, function* () {
            const sortvalue = -1;
            let query = [];
            query = [
                {
                    $match: {
                        delete_at: null,
                        _id: { $ne: new mongoose_2.Types.ObjectId(idUser) },
                        $or: [
                            {
                                full_name: {
                                    $regex: new RegExp(regexVietnamese_1.RegexCommon.regexVietnamese(searchstring)),
                                    $options: 'i',
                                },
                            },
                            {
                                email: {
                                    $regex: new RegExp(regexVietnamese_1.RegexCommon.regexVietnamese(searchstring)),
                                    $options: 'i',
                                },
                            },
                            {
                                phone: {
                                    $regex: new RegExp(regexVietnamese_1.RegexCommon.regexVietnamese(searchstring)),
                                    $options: 'i',
                                },
                            },
                            {
                                user_name: {
                                    $regex: new RegExp(regexVietnamese_1.RegexCommon.regexVietnamese(searchstring)),
                                    $options: 'i',
                                },
                            },
                        ],
                    },
                },
                {
                    $sort: {
                        create_at: sortvalue,
                    },
                },
            ];
            query.push({
                $setWindowFields: { output: { totalCount: { $count: {} } } },
            });
            if (rowsPerpage != undefined && currentPage != undefined) {
                query.push({ $skip: rowsPerpage * currentPage });
                query.push({ $limit: rowsPerpage });
            }
            const data = yield this.tAccountModel.aggregate(query);
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
    addNew(user_name, pwd, full_name, gender, phone, email, birth_day, role_key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validateExists = yield this.tAccountModel.find({
                    $or: [{ user_name: user_name }],
                    delete_at: null,
                });
                if (validateExists.length > 0) {
                    const duplicate_data = [];
                    if (validateExists.some((x) => x.user_name == user_name)) {
                        duplicate_data.push('Tên tài khoản');
                    }
                    throw new common_1.HttpException(`Dữ liệu ${duplicate_data.join(' ,')} đã tồn tại`, common_1.HttpStatus.FORBIDDEN);
                }
                else {
                    const hashPwd = yield bcrypt.hashSync(pwd, 10);
                    const admin_infor = {
                        user_name,
                        password: hashPwd,
                        full_name,
                        gender,
                        phone,
                        email,
                        birth_day,
                        registration_date: new Date(),
                        role_key,
                    };
                    const newadmin = yield new this.tAccountModel(Object.assign({}, admin_infor));
                    const adminresult = yield newadmin.save();
                    return adminresult;
                }
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    addMany(body_list) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                body_list.forEach((body) => __awaiter(this, void 0, void 0, function* () {
                    const { user_name, pwd, full_name, gender, phone, email, dob, role_key, } = body;
                    const validateExists = yield this.tAccountModel.find({
                        $or: [{ user_name: user_name }],
                        delete_at: null,
                    });
                    if (validateExists.length > 0) {
                        const duplicate_data = [];
                        if (validateExists.some((x) => x.user_name == user_name)) {
                            duplicate_data.push('Tên tài khoản');
                        }
                        throw new common_1.HttpException(`Dữ liệu ${duplicate_data.join(' ,')} đã tồn tại`, common_1.HttpStatus.FORBIDDEN);
                    }
                    else {
                        const hashPwd = yield bcrypt.hashSync(pwd, 10);
                        const admin_infor = {
                            user_name,
                            password: hashPwd,
                            full_name,
                            gender,
                            phone,
                            email,
                            dob,
                            registration_date: new Date(),
                            role_key,
                        };
                        const newadmin = yield new this.tAccountModel(Object.assign({}, admin_infor));
                        yield newadmin.save();
                        return true;
                    }
                }));
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getInfor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tAccountModel.aggregate([
                { $match: { _id: new mongoose_2.Types.ObjectId(id), delete_at: null } },
                {
                    $lookup: {
                        from: 'teachers',
                        localField: '_id',
                        foreignField: 'account_id',
                        as: 'teacher',
                    },
                },
                {
                    $lookup: {
                        from: 'students',
                        localField: '_id',
                        foreignField: 'account_id',
                        as: 'student',
                    },
                },
                {
                    $lookup: {
                        from: 'employee',
                        localField: '_id',
                        foreignField: 'account_id',
                        as: 'employee',
                    },
                },
                { $unwind: { preserveNullAndEmptyArrays: true, path: '$teacher' } },
                { $unwind: { preserveNullAndEmptyArrays: true, path: '$student' } },
                {
                    $set: {
                        class_id: {
                            $ifNull: ['$teacher.class_id', '$student.class_id', null],
                        },
                    },
                },
                {
                    $lookup: {
                        from: 'classes',
                        localField: 'class_id',
                        foreignField: '_id',
                        as: 'class',
                    },
                },
                {
                    $lookup: {
                        from: 'grades',
                        localField: 'class.grade_id',
                        foreignField: '_id',
                        as: 'grade',
                    },
                },
            ]);
            if (data) {
                delete data[0].password;
            }
            return data[0] || null;
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.tAccountModel.findOneAndUpdate({ _id: new mongoose_2.Types.ObjectId(id) }, {
                    delete_at: new Date(),
                });
                if (data != null) {
                    return data;
                }
                else {
                    throw new common_1.HttpException('Không tìm thấy tài khoản', common_1.HttpStatus.FORBIDDEN);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    resetUserPwd(id, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashPwd = yield bcrypt.hashSync(pwd, 10);
                const data = yield this.tAccountModel.findOneAndUpdate({ _id: id, delete_at: null }, {
                    password: hashPwd,
                }, { new: true });
                if (data != null) {
                    return data;
                }
                else {
                    throw new common_1.HttpException('Không tìm thấy tài khoản', common_1.HttpStatus.FORBIDDEN);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getPrivilege(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const data = yield this.tAccountModel.aggregate([
                { $match: { _id: new mongoose_2.Types.ObjectId(id), delete_at: null } },
                {
                    $lookup: {
                        from: 'roles',
                        localField: 'role_key',
                        foreignField: 'role_key',
                        as: 'role_priv',
                    },
                },
                { $unwind: '$role_priv' },
                {
                    $lookup: {
                        from: 'privileges',
                        localField: 'role_priv.list_privilege',
                        foreignField: '_id',
                        as: 'privileges',
                    },
                },
                { $unwind: '$privileges' },
                { $replaceRoot: { newRoot: '$privileges' } },
            ]);
            return data;
        });
    }
    getAllRole() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tRoleModel.aggregate([
                { $match: { role_key: { $nin: ['ADMIN', 'TEACHER', 'STUDENTS'] } } },
                {
                    $project: {
                        role_key: 1,
                        role_name: 1,
                    },
                },
            ]);
            return data;
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tRoleModel.aggregate([
                { $match: { role_key: { $nin: ['ADMIN', 'STUDENTS'] } } },
                {
                    $count: 'count',
                },
            ]);
            return data[0].count || 0;
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(t_account_schema_1.T_Account.name)),
    __param(1, (0, mongoose_1.InjectModel)(role_schema_1.Role.name)),
    __param(2, (0, mongoose_1.InjectModel)('oauth_access_tokens')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        jwt_1.JwtService,
        schoolyear_service_1.SchoolYearService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map