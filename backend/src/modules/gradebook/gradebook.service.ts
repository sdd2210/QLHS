import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { GradebookDocument, T_Gradebook } from './schema/gradebook.schema';

@Injectable()
export class GradebookService {
  constructor(
    @InjectModel(T_Gradebook.name)
    private tGradebookModel: Model<GradebookDocument>,
  ) {}

  async getAll(
    class_id?: string,
    subject_id?: string,
    student_id?: string,
    semester?: number,
  ) {
    const query = [];
    query.push({ $match: { delete_at: null } });
    if (class_id) {
      query.push({ $match: { class_id: new Types.ObjectId(class_id) } });
    }
    if (student_id) {
      query.push({ $match: { student_id: new Types.ObjectId(student_id) } });
    }
    if (subject_id) {
      query.push({ $match: { subject_id: new Types.ObjectId(subject_id) } });
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
    const data = await this.tGradebookModel.aggregate(query);
    return data;
  }

  async upsertScroce(
    class_id: string,
    subject_id: string,
    list_value: any,
    semester: any,
  ) {
    const opts = [];
    for (const item of list_value) {
      opts.push({
        updateOne: {
          filter: {
            class_id: new Types.ObjectId(class_id),
            subject_id: new Types.ObjectId(subject_id),
            student_id: new Types.ObjectId(item.student_id),
            semester: semester,
          },
          update: {
            $set: {
              list_test: item.list_test.map((x) => {
                x.test_id = new Types.ObjectId(x.test_id);
                return x;
              }),
            },
            $setOnInsert: {
              class_id: new Types.ObjectId(class_id),
              subject_id: new Types.ObjectId(subject_id),
              student_id: new Types.ObjectId(item.student_id),
              semester: semester,
            },
          },
          upsert: true,
        },
      });
    }
    const data = await this.tGradebookModel.bulkWrite(opts);
    return data;
  }
}
