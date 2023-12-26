/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { EmployeeDocument, T_Employee } from './schema/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(T_Employee.name)
    private tEmployeeModel: Model<EmployeeDocument>,
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
    subject_id: string,
    status: string,
    rowsPerpage?: number,
    currentPage?: number,
  ) {
    try {
      const sortvalue = 1;

      let query = [];
      const subject_query = {
        $lookup: {
          from: 'subjects',
          localField: 'subject_id',
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
      };
      if (subject_id) {
        subject_query['$lookup']['pipeline'].push({
          $match: {
            _id: new Types.ObjectId(subject_id),
          },
        } as any);
      }
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
          $set: {
            employee_code: {
              $concat: [
                '$employee_alias_string',
                {
                  $substrCP: [
                    {
                      $add: [10000, '$employee_alias_number'],
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
              ['full_name', 'email', 'phone', 'employee_code'],
              searchstring,
            ),
          },
        },
        subject_query,
        {
          $unwind: '$subjects',
        },
        {
          $lookup: {
            from: 'grades',
            localField: 'subjects.grade_id',
            foreignField: '_id',
            as: 'grades',
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
          $unwind: '$grades',
        },
      ];

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
      const data = await this.tEmployeeModel.aggregate(query);
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

  async getInfor(id: any) {
    const data = await this.tEmployeeModel.find({
      account_id: new Types.ObjectId(id),
    });
    return data;
  }

  async createEmployee(body: any) {
    const { full_name, email, parent_name, account_id, address, subject_id } =
      body;
    const check_employee = await this.tEmployeeModel.findOne({
      email,
      subject_id,
      full_name,
    });
    if (check_employee) {
      throw new HttpException(
        'Tài khoản này đã được đăng kí!',
        HttpStatus.BAD_REQUEST,
      );
    }
    const max_data = await this.tEmployeeModel
      .find()
      .sort({ employee_alias_number: -1 })
      .limit(1);
    const new_data = {
      account_id,
      subject_id: new Types.ObjectId(subject_id),
      class_list: [],
      parent_name,
      address,
      employee_alias_string: new Date().getFullYear().toString(),
      employee_alias_number: max_data[0]
        ? max_data[0].employee_alias_number
        : 0 + 1,
      create_at: new Date(),
    };

    const new_employee = await new this.tEmployeeModel({
      ...new_data,
    });
    await new_employee.save();
    return new_employee;
  }

  async deleteOne(id: string) {
    try {
      const data = await this.tEmployeeModel.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        {
          delete_at: new Date(),
        },
      );
      console.log(data);
      if (data != null) {
        return data;
      } else {
        throw new HttpException(
          'Không tìm thấy nhân viên',
          HttpStatus.FORBIDDEN,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async addClass(
    employ_id: string,
    class_id: string,
    start_date: any,
    end_date: any,
  ) {
    const data = await this.tEmployeeModel.findOneAndUpdate(
      { _id: new Types.ObjectId(employ_id) },
      {
        $addToSet: {
          class_list: {
            class_id: new Types.ObjectId(class_id),
            start_date: new Date(start_date),
            end_date: new Date(end_date),
          },
        },
      },
    );
    return data;
  }

  async deleteClass(employ_id: string, class_id: string) {
    const data = await this.tEmployeeModel.findOneAndUpdate(
      { _id: new Types.ObjectId(employ_id) },
      {
        $pull: { $elemMatch: { class_id: new Types.ObjectId(class_id) } },
      },
    );
    return data;
  }

  async updateEmployee(id, body: any) {
    const { subject_id, address } = body;
    const check_student = await this.tEmployeeModel.findOne({
      _id: new Types.ObjectId(id),
    });
    if (!check_student) {
      throw new HttpException(
        'Tài khoản này không tồn tại!',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      check_student.class_list.length > 0 &&
      subject_id != check_student.subject_id.toString()
    ) {
      throw new HttpException(
        'Giáo viên đang giải dạy môn cũ. Không thể cập nhật môn dạy của giáo viên',
        HttpStatus.BAD_REQUEST,
      );
    }

    const data = await this.tEmployeeModel
      .findOneAndUpdate(
        {
          _id: new Types.ObjectId(id),
        },
        {
          $set: { subject_id: new Types.ObjectId(subject_id), address },
        },
      )
      .lean();
    return data;
  }
}
