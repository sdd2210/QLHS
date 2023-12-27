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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const room_schema_1 = require("./schema/room.schema");
let RoomService = class RoomService {
    constructor(tRoomModel) {
        this.tRoomModel = tRoomModel;
    }
    getAll(class_id = 'all') {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [];
            query.push({ $match: { delete_at: null } });
            if (class_id != 'all') {
                query.push({
                    $match: { 'class_list.class_id': new mongoose_2.Types.ObjectId(class_id) },
                });
            }
            const data = yield this.tRoomModel.aggregate(query);
            return data;
        });
    }
    getStatics() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tRoomModel.aggregate([
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
    getInfor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [];
            query.push({ $match: { delete_at: null, _id: new mongoose_2.Types.ObjectId(id) } });
            query.push({
                $lookup: {
                    from: 'classes',
                    localField: 'class_list.class_id',
                    foreignField: '_id',
                    as: 'class',
                },
            });
            const data = yield this.tRoomModel.aggregate(query);
            return data[0];
        });
    }
    deleteInfor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tRoomModel.findOneAndUpdate({
                _id: new mongoose_2.Types.ObjectId(id),
            }, {
                $set: {
                    delete_at: new Date(),
                },
            });
            return data;
        });
    }
    addOne(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_data = {
                name,
                class_list: [],
                create_at: new Date(),
            };
            const new_employee = yield new this.tRoomModel(Object.assign({}, new_data));
            yield new_employee.save();
            return new_employee;
        });
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(room_schema_1.T_Room.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map