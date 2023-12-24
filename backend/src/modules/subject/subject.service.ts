import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { SubjectDocument, T_Subject } from './schema/subject.schema';
import { GradeService } from '../grade/grade.service';
import { RegexCommon } from 'src/common/regexVietnamese';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(T_Subject.name) private tSubjectModel: Model<SubjectDocument>,
    private gradeService: GradeService,
  ) {}

  async getAll(grade_id = 'all') {
    let query = [];
    query.push({ $match: { delete_at: null } });
    if (grade_id != 'all') {
      query.push({ $match: { grade_id: new Types.ObjectId(grade_id) } });
    }
    query = query.concat([
      {
        $lookup: {
          from: 'employee',
          localField: '_id',
          foreignField: 'subject_id',
          as: 'employee',
        },
      },
      {
        $set: {
          count: { $size: '$employee' },
        },
      },
      {
        $unset: ['employee'],
      },
    ]);
    const data = await this.tSubjectModel.aggregate(query);
    return data;
  }

  async getStatics() {
    const data = await this.tSubjectModel.aggregate([
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

  async getInforByAlias(subject_key: any) {
    const data = await this.tSubjectModel.findOne({
      delete_at: null,
      subject_id: subject_key,
    });
    return data || { _id: '' };
  }

  async getCommon() {
    const data = await this.tSubjectModel.find({
      grade_id: null,
    });
    return data;
  }

  async createOne(body) {
    const { grade_id, name, description } = body;
    const dataGrade = await this.gradeService.getInfor(grade_id);
    const prefix = dataGrade.grade_key.split('-')[0];
    const suffix = RegexCommon.regexVietnameseNor(
      name.replace(' ', '').trim().toLowerCase(),
    );
    if (grade_id && name.length > 0) {
      const new_data = new this.tSubjectModel({
        name,
        subject_id: `lop${prefix}-${suffix}`,
        description: description,
        status: true,
        grade_id: new Types.ObjectId(grade_id),
      });
      await new_data.save();
      return new_data;
    }
  }
  async deleteOne(grade_id) {
    const data = await this.tSubjectModel.findOneAndUpdate(
      { _id: new Types.ObjectId(grade_id) },
      {
        delete_at: new Date(),
      },
    );
    return data;
  }

  async editOne(id, body: any) {
    const { grade_id, name, description } = body;
    const dataGrade = await this.gradeService.getInfor(grade_id);
    const prefix = dataGrade.grade_key.split('-')[0];
    const suffix = RegexCommon.regexVietnameseNor(
      name.replace(' ', '').trim().toLowerCase(),
    );
    const data = await this.tSubjectModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      {
        name: name,
        description: description,
        subject_id: `lop${prefix}-${suffix}`,
      },
      {
        new: true,
      },
    );
    return data;
  }
}
