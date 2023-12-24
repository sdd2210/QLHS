import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { GradeDocument, T_Grade } from './schema/grade.schema';

@Injectable()
export class GradeService {
  constructor(
    @InjectModel(T_Grade.name) private tGradeModel: Model<GradeDocument>,
  ) {}

  async getAll(level_id = 'all') {
    let query = [];
    query.push({ $match: { delete_at: null } });
    if (level_id != 'all') {
      query.push({ $match: { level_id: new Types.ObjectId(level_id) } });
    }
    query = query.concat([
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
    const data = await this.tGradeModel.aggregate(query);
    return data;
  }
  async getByKey(key: string) {
    return await this.tGradeModel.findOne({ grade_key: key });
  }
  async getByID(id: string) {
    return await this.tGradeModel.findOne({ _id: new Types.ObjectId(id) });
  }
  async getStatics() {
    const data = await this.tGradeModel.aggregate([
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

  async getInfor(gradeid) {
    const data = await this.tGradeModel.findOne({
      _id: new Types.ObjectId(gradeid),
    });
    return data;
  }
}
