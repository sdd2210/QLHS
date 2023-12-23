import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { StudentDocument, T_Student } from './schema/student.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(T_Student.name) private tCustomerModel: Model<StudentDocument>,
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
            full_name: '$account.full_name',
            phone: '$account.phone',
          },
        },
        {
          $match: {
            $or: this.multiSearch(
              ['full_name', 'phone', 'student_code'],
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
      const data = await this.tCustomerModel.aggregate(query);
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

  async createStudent(body: any) {
    const { full_name, email, parent_name, account_id, address, class_id } =
      body;
    const check_student = await this.tCustomerModel.findOne({
      email,
      class_id,
      full_name,
    });
    if (check_student) {
      throw new HttpException(
        'Tài khoản này đã được đăng kí!',
        HttpStatus.BAD_REQUEST,
      );
    }
    const max_data = await this.tCustomerModel
      .find()
      .sort({ student_alias_number: -1 })
      .limit(1);
    const new_data = {
      account_id,
      class_id: new Types.ObjectId(class_id),
      parent_name,
      address,
      student_alias_string: new Date().getFullYear().toString(),
      student_alias_number: max_data[0]
        ? max_data[0].student_alias_number
        : 0 + 1,
      create_at: new Date(),
      class_list: [],
    };

    const new_student = await new this.tCustomerModel({
      ...new_data,
    });
    await new_student.save();
    const class_infor = await this.tCustomerModel.aggregate([
      {
        $match: {
          _id: new_student._id,
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
    new_student.class_list = [
      {
        class_id: class_infor[0].class._id,
        start_date: class_infor[0].class.start_from,
        end_date: class_infor[0].class.end_to,
      },
    ];
    new_student.save();
    return new_student;
  }

  async updateStudent(id, body: any) {
    const { parent_name, address } = body;
    const check_student = await this.tCustomerModel.findOne({
      _id: new Types.ObjectId(id),
    });
    if (!check_student) {
      throw new HttpException(
        'Tài khoản này không tồn tại!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const data = await this.tCustomerModel
      .findOneAndUpdate(
        {
          _id: new Types.ObjectId(id),
        },
        {
          $set: { parent_name, address },
        },
      )
      .lean();
    return data;
  }

  async deleteOne(id: string) {
    try {
      const data = await this.tCustomerModel.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        {
          delete_at: new Date(),
        },
      );
      if (data != null) {
        return data;
      } else {
        throw new HttpException(
          'Không tìm thấy tài khoản',
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
