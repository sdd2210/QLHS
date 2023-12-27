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
exports.GradebookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const gradebook_schema_1 = require("./schema/gradebook.schema");
let GradebookService = class GradebookService {
    constructor(tGradebookModel) {
        this.tGradebookModel = tGradebookModel;
    }
    getAll(class_id, subject_id, student_id, semester) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [];
            query.push({ $match: { delete_at: null } });
            if (class_id) {
                query.push({ $match: { class_id: new mongoose_2.Types.ObjectId(class_id) } });
            }
            if (student_id) {
                query.push({ $match: { student_id: new mongoose_2.Types.ObjectId(student_id) } });
            }
            if (subject_id) {
                query.push({ $match: { subject_id: new mongoose_2.Types.ObjectId(subject_id) } });
            }
            if (semester) {
                query.push({ $match: { semester } });
            }
            query.push({ $match: { semester } });
            if (!subject_id) {
                query.push({
                    $group: { _id: '$subject_id', value: { $push: '$$ROOT' } },
                });
            }
            const data = yield this.tGradebookModel.aggregate(query);
            return data;
        });
    }
    upsertScroce(class_id, subject_id, list_value, semester) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = [];
            for (const item of list_value) {
                opts.push({
                    updateOne: {
                        filter: {
                            class_id: new mongoose_2.Types.ObjectId(class_id),
                            subject_id: new mongoose_2.Types.ObjectId(subject_id),
                            student_id: new mongoose_2.Types.ObjectId(item.student_id),
                            semester: semester,
                        },
                        update: {
                            $set: {
                                list_test: item.list_test.map((x) => {
                                    x.test_id = new mongoose_2.Types.ObjectId(x.test_id);
                                    return x;
                                }),
                            },
                            $setOnInsert: {
                                class_id: new mongoose_2.Types.ObjectId(class_id),
                                subject_id: new mongoose_2.Types.ObjectId(subject_id),
                                student_id: new mongoose_2.Types.ObjectId(item.student_id),
                                semester: semester,
                            },
                        },
                        upsert: true,
                    },
                });
            }
            const data = yield this.tGradebookModel.bulkWrite(opts);
            return data;
        });
    }
};
GradebookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(gradebook_schema_1.T_Gradebook.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GradebookService);
exports.GradebookService = GradebookService;
//# sourceMappingURL=gradebook.service.js.map