import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { RoomDocument, T_Room } from './schema/room.schema';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(T_Room.name) private tRoomModel: Model<RoomDocument>,
  ) {}

  async getAll(class_id = 'all') {
    const query = [];
    query.push({ $match: { delete_at: null } });
    if (class_id != 'all') {
      query.push({
        $match: { 'class_list.class_id': new Types.ObjectId(class_id) },
      });
    }
    const data = await this.tRoomModel.aggregate(query);
    return data;
  }

  async getStatics() {
    const data = await this.tRoomModel.aggregate([
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
  }

  async getInfor(id: any) {
    const query = [];
    query.push({ $match: { delete_at: null, _id: new Types.ObjectId(id) } });
    query.push({
      $lookup: {
        from: 'classes',
        localField: 'class_list.class_id',
        foreignField: '_id',
        as: 'class',
      },
    });
    const data = await this.tRoomModel.aggregate(query);
    return data[0];
  }

  async deleteInfor(id: any) {
    const data = await this.tRoomModel.findOneAndUpdate(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: {
          delete_at: new Date(),
        },
      },
    );
    return data;
  }

  async addOne(name: string) {
    const new_data = {
      name,
      class_list: [],
      create_at: new Date(),
    };

    const new_employee = await new this.tRoomModel({
      ...new_data,
    });
    await new_employee.save();
    return new_employee;
  }
}
