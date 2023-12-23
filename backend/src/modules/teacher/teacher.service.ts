import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { TeacherDocument, T_Teacher } from './schema/teacher.schema';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(T_Teacher.name) private tTeacherModel: Model<TeacherDocument>,
  ) {}

  multiSearch(array: string[], searchstring: string) {
    return array.map((x: string) => {
      const data = {};
      data[`${x}`] = {
        $regex: new RegExp(RegexCommon.regexVietnamese(searchstring)),
        $options: 'i',
      };
      return data;
    });
  }

  async getAll(
    searchstring: string,
    class_id: string,
    status: string,
    rowsPerpage?: number,
    currentPage?: number,
  ) {
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
            teacher_code: {
              $concat: [
                '$teacher_alias_string',
                {
                  $substrCP: [
                    {
                      $add: [10000, '$teacher_alias_number'],
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
            $or: this.multiSearch(
              ['full_name', 'email', 'phone', 'teacher_code'],
              searchstring,
            ),
          },
        },
      ];

      if (class_id != 'all') {
        query.push({
          $match: { class_id: new Types.ObjectId(class_id) },
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
      console.log(JSON.stringify(query));
      const data = await this.tTeacherModel.aggregate(query);
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
      } else {
        return { original: [], total: totalRows };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createTeacher(body: any) {
    const { full_name, email, parent_name, account_id, address, class_id } =
      body;
    const check_teacher = await this.tTeacherModel.findOne({
      email,
      class_id,
      full_name,
    });
    if (check_teacher) {
      throw new HttpException(
        'Tài khoản này đã được đăng kí!',
        HttpStatus.BAD_REQUEST,
      );
    }
    const max_data = await this.tTeacherModel
      .find()
      .sort({ teacher_alias_number: -1 })
      .limit(1);
    const new_data = {
      account_id,
      class_id: new Types.ObjectId(class_id),
      parent_name,
      address,
      teacher_alias_string: new Date().getFullYear().toString(),
      teacher_alias_number: max_data[0]
        ? max_data[0].teacher_alias_number
        : 0 + 1,
      create_at: new Date(),
      class_list: [],
    };

    const new_teacher = await new this.tTeacherModel({
      ...new_data,
    });
    await new_teacher.save();
    const class_infor = await this.tTeacherModel.aggregate([
      {
        $match: {
          _id: new_teacher._id,
        },
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
    ]);
    new_teacher.class_list = [
      {
        class_id: class_infor[0].class._id,
        start_date: class_infor[0].class.start_from,
        end_date: class_infor[0].class.end_to,
      },
    ];
    new_teacher.save();
    return new_teacher;
  }
}
