import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { LevelDocument, T_Level } from './schema/level.schema';

@Injectable()
export class LevelService {
  constructor(
    @InjectModel(T_Level.name) private tLevelModel: Model<LevelDocument>,
  ) {}

  async getAll(grade_key = 'all') {
    let query = [];
    query.push({ $match: { delete_at: null } });
    if (grade_key) {
      query.push({
        $lookup: {
          from: 'grades',
          localField: '_id',
          foreignField: 'level_id',
          as: 'grade_infor',
          pipeline: [{ $match: { grade_key } }],
        },
      });
    } else {
      query.push({
        $lookup: {
          from: 'grades',
          localField: '_id',
          foreignField: 'level_id',
          as: 'grade_infor',
        },
      });
    }
    query.push({
      $set: {
        gradeCount: { $size: '$grade_infor' },
        classCount: 10,
        studentCount: 100,
      },
    });
    query = query.concat([
      {
        $lookup: {
          from: 'grades',
          localField: '_id',
          foreignField: 'level_id',
          as: 'grade',
        },
      },
      {
        $lookup: {
          from: 'classes',
          localField: 'grade._id',
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
        $unset: ['students', 'class', 'grade'],
      },
    ]);
    const data = await this.tLevelModel.aggregate(query);
    return data;
  }

  async getInforByGrade(grade_key) {
    const data = await this.tLevelModel.aggregate([
      {
        $lookup: {
          from: 'grades',
          localField: '_id',
          foreignField: 'level_id',
          as: 'grade_infor',
          pipeline: [{ $match: { grade_key } }],
        },
      },
      {
        $unwind: '$grade_infor',
      },
    ]);
    return data;
  }

  async getInforByKey(level_key) {
    const data = await this.tLevelModel.findOne({ level_key: level_key });
    return data;
  }

  async getStatics() {
    const data = await this.tLevelModel.aggregate([
      {
        $lookup: {
          from: 'grades',
          localField: '_id',
          foreignField: 'level_id',
          as: 'grade',
        },
      },
      {
        $lookup: {
          from: 'classes',
          localField: 'grade._id',
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
        $unset: ['students', 'class', 'grade'],
      },
    ]);
    return data;
  }
}
