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
exports.TimeTableService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const regexVietnamese_1 = require("../../common/regexVietnamese");
const timetable_schema_1 = require("./schema/timetable.schema");
const lesson_service_1 = require("../lesson/lesson.service");
const employee_service_1 = require("../employee/employee.service");
let TimeTableService = class TimeTableService {
    constructor(tTimeTableModel, lessonService, employeeService) {
        this.tTimeTableModel = tTimeTableModel;
        this.lessonService = lessonService;
        this.employeeService = employeeService;
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
                            student_code: {
                                $concat: [
                                    '$student_alias_string',
                                    {
                                        $substrCP: [
                                            {
                                                $add: [10000, '$student_alias_number'],
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
                            $or: this.multiSearch(['full_name', 'email', 'phone', 'student_code'], searchstring),
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
                const data = yield this.tTimeTableModel.aggregate(query);
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
    getByClass(class_id, current_date) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = [
                {
                    $match: {
                        class_id: new mongoose_2.Types.ObjectId(class_id),
                    },
                },
                {
                    $unwind: '$list_lesson',
                },
            ];
            if (current_date) {
                const cur_day = new Date(current_date);
                query.push({
                    $set: {
                        'list_lesson.list_subject': {
                            $filter: {
                                input: '$list_lesson.list_subject',
                                as: 'item',
                                cond: {
                                    $and: [
                                        { $lte: ['$$item.start_date', cur_day] },
                                        { $gte: ['$$item.end_date', cur_day] },
                                    ],
                                },
                            },
                        },
                    },
                });
            }
            query = query.concat([
                {
                    $lookup: {
                        from: 'subjects',
                        localField: 'list_lesson.list_subject.subject_id',
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
                },
                {
                    $lookup: {
                        from: 'employee',
                        localField: 'list_lesson.list_subject.teacher_id',
                        foreignField: '_id',
                        as: 'employee',
                        pipeline: [
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
                        ],
                    },
                },
            ]);
            const data = yield this.tTimeTableModel.aggregate(query);
            return data;
        });
    }
    getByEmployee(employee_id, current_date) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [
                {
                    $unwind: '$list_lesson',
                },
            ];
            const check = [];
            if (employee_id) {
                check.push({
                    $eq: ['$$item.teacher_id', new mongoose_2.Types.ObjectId(employee_id)],
                });
            }
            if (current_date) {
                const cur_day = new Date(current_date);
                check.push({ $lte: ['$$item.start_date', cur_day] });
                check.push({ $gte: ['$$item.end_date', cur_day] });
            }
            query.push({
                $set: {
                    'list_lesson.list_subject': {
                        $filter: {
                            input: '$list_lesson.list_subject',
                            as: 'item',
                            cond: {
                                $and: check,
                            },
                        },
                    },
                },
            });
            query.push({
                $match: { $expr: { $gt: [{ $size: '$list_lesson.list_subject' }, 0] } },
            });
            query.push({
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
            });
            const data = yield this.tTimeTableModel.aggregate(query);
            return data;
        });
    }
    createTimeTable(body) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    addLessontoClass(class_id, employee_id, subject_id, startdate, enddate, lesson, workday, room_id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let timtable_id = null;
            const list_workday = workday.filter((x) => x.selected);
            const list_update_lesson = lesson.filter((x) => x.selected);
            const checkTimtable = yield this.tTimeTableModel
                .findOne({ class_id: new mongoose_2.Types.ObjectId(class_id) })
                .lean();
            timtable_id = (_a = checkTimtable === null || checkTimtable === void 0 ? void 0 : checkTimtable._id) !== null && _a !== void 0 ? _a : null;
            let cur_lesson = (_b = checkTimtable === null || checkTimtable === void 0 ? void 0 : checkTimtable.list_lesson) !== null && _b !== void 0 ? _b : [];
            const check_class = yield this.tTimeTableModel.aggregate([
                {
                    $match: {
                        class_id: new mongoose_2.Types.ObjectId(class_id),
                    },
                },
                {
                    $unwind: '$list_lesson',
                },
                {
                    $unwind: '$list_lesson.list_subject',
                },
                {
                    $match: {
                        'list_lesson.lesson_id': {
                            $in: list_update_lesson.map((x) => new mongoose_2.Types.ObjectId(x.value)),
                        },
                        'list_lesson.list_subject.order': {
                            $in: list_workday.map((x) => x.value - 2),
                        },
                    },
                },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', startdate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', startdate],
                                        },
                                    ],
                                },
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', enddate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', enddate],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (check_class.length > 0) {
                throw new common_1.HttpException('Lớp đã có lịch học vào các khoang thời gian này!', common_1.HttpStatus.BAD_REQUEST);
            }
            const check_teacher = yield this.tTimeTableModel.aggregate([
                {
                    $match: {
                        class_id: { $ne: new mongoose_2.Types.ObjectId(class_id) },
                    },
                },
                {
                    $unwind: '$list_lesson',
                },
                {
                    $unwind: '$list_lesson.list_subject',
                },
                {
                    $match: {
                        'list_lesson.lesson_id': {
                            $in: list_update_lesson.map((x) => new mongoose_2.Types.ObjectId(x.value)),
                        },
                        'list_lesson.list_subject.order': {
                            $in: list_workday.map((x) => x.value - 2),
                        },
                        'list_lesson.list_subject.teacher_id': new mongoose_2.Types.ObjectId(employee_id),
                    },
                },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', startdate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', startdate],
                                        },
                                    ],
                                },
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', enddate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', enddate],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (check_teacher.length > 0) {
                throw new common_1.HttpException('Giáo viên đã có lịch học vào các khoang thời gian này!', common_1.HttpStatus.BAD_REQUEST);
            }
            const check_room = yield this.tTimeTableModel.aggregate([
                {
                    $match: {
                        class_id: { $ne: new mongoose_2.Types.ObjectId(class_id) },
                    },
                },
                {
                    $unwind: '$list_lesson',
                },
                {
                    $unwind: '$list_lesson.list_subject',
                },
                {
                    $match: {
                        'list_lesson.lesson_id': {
                            $in: list_update_lesson.map((x) => new mongoose_2.Types.ObjectId(x.value)),
                        },
                        'list_lesson.list_subject.order': {
                            $in: list_workday.map((x) => x.value - 2),
                        },
                        'list_lesson.list_subject.room_id': new mongoose_2.Types.ObjectId(room_id),
                    },
                },
                {
                    $match: {
                        $expr: {
                            $or: [
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', startdate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', startdate],
                                        },
                                    ],
                                },
                                {
                                    $and: [
                                        {
                                            $gte: ['$list_lesson.list_subject.end_date', enddate],
                                        },
                                        {
                                            $lte: ['$list_lesson.list_subject.start_date', enddate],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ]);
            if (check_room.length > 0) {
                throw new common_1.HttpException('Phòng học đã có lớp học vào các khoang thời gian này!', common_1.HttpStatus.BAD_REQUEST);
            }
            if (!checkTimtable) {
                const list_lesson = yield this.lessonService.getAll();
                const new_timtable = {
                    class_id: new mongoose_2.Types.ObjectId(class_id),
                    start_date: startdate,
                    end_date: enddate,
                    list_lesson: list_lesson.map((x, i) => ({
                        lesson_id: x._id,
                        order: i,
                        list_subject: Array.from({ length: 6 }, () => {
                            return { order: 1 };
                        }).map((x, i) => ({ order: i })),
                    })),
                };
                const newOauthAccess = new this.tTimeTableModel(new_timtable);
                yield newOauthAccess.save();
                timtable_id = newOauthAccess._id;
                cur_lesson = newOauthAccess.list_lesson;
            }
            cur_lesson = cur_lesson.map((x) => {
                if (list_update_lesson.filter((o) => o.value == x.lesson_id.toString())
                    .length > 0) {
                    list_workday.map((k) => {
                        x.list_subject[k.value - 2].subject_id = new mongoose_2.Types.ObjectId(subject_id);
                        x.list_subject[k.value - 2].teacher_id = new mongoose_2.Types.ObjectId(employee_id);
                        x.list_subject[k.value - 2].room_id = new mongoose_2.Types.ObjectId(room_id);
                        x.list_subject[k.value - 2].start_date = startdate;
                        x.list_subject[k.value - 2].end_date = enddate;
                    });
                }
                return x;
            });
            const updateData = yield this.tTimeTableModel
                .findOneAndUpdate({
                _id: timtable_id,
            }, {
                $set: {
                    list_lesson: cur_lesson,
                    start_date: startdate,
                    end_date: enddate,
                },
            })
                .lean();
            const employee_add = yield this.employeeService.addClass(employee_id, class_id, updateData.start_date, updateData.end_date);
            return updateData;
        });
    }
    editLessontoClass(class_id, employee_id, subject_id, startdate, enddate, lesson_id, order, room_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateData = yield this.tTimeTableModel
                .updateOne({
                class_id: new mongoose_2.Types.ObjectId(class_id),
            }, {
                $set: {
                    'list_lesson.$[t].list_subject.$[elem]': {
                        start_date: startdate,
                        end_date: enddate,
                        room_id: new mongoose_2.Types.ObjectId(room_id),
                        subject_id: new mongoose_2.Types.ObjectId(subject_id),
                        teacher_id: new mongoose_2.Types.ObjectId(employee_id),
                        order,
                    },
                },
            }, {
                strict: false,
                arrayFilters: [
                    { 't.lesson_id': new mongoose_2.Types.ObjectId(lesson_id) },
                    { 'elem.order': order },
                ],
            })
                .lean();
            const employee_add = yield this.employeeService.addClass(employee_id, class_id, startdate, enddate);
            return updateData;
            return updateData;
        });
    }
};
TimeTableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(timetable_schema_1.T_TimeTable.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        lesson_service_1.LessonService,
        employee_service_1.EmployeeService])
], TimeTableService);
exports.TimeTableService = TimeTableService;
//# sourceMappingURL=timetable.service.js.map