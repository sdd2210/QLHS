import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { ClassDocument, T_Class } from './schema/class.schema';
import { addYears } from 'date-fns';
import { AuthService } from '../auth/auth.service';
import { RegexCommon } from 'src/common/regexVietnamese';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(T_Class.name) private tClassModel: Model<ClassDocument>,
    private authService: AuthService,
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
  async getAll(grade_key = 'all', searchstring?: any, user_id?: any) {
    let query = [];
    query.push({ $match: { delete_at: null } });
    if (grade_key != 'all') {
      query.push({
        $lookup: {
          from: 'grades',
          localField: 'grade_id',
          foreignField: '_id',
          as: 'grade_infor',
          pipeline: [
            {
              $match: {
                grade_key: grade_key,
              },
            },
          ],
        },
      });
      query.push({
        $unwind: '$grade_infor',
      });
    }

    if (user_id) {
      const user_infor = await this.authService.getUser(user_id);
      const match_field = {};
      match_field[
        `${
          user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee'
        }.account_id`
      ] = new Types.ObjectId(user_id);
      query = query.concat([
        {
          $graphLookup: {
            from: user_infor.role_key == 'STUDENTS' ? 'students' : 'employee',
            startWith: '$_id',
            connectFromField: '_id',
            connectToField: 'class_list.class_id',
            as:
              user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee',
          },
        },
        {
          $unwind: `$${
            user_infor.role_key == 'STUDENTS' ? 'student_infor' : 'employee'
          }`,
        },
        {
          $match: {
            delete_at: null,
            ...match_field,
          },
        },
      ]);
    }

    query = query.concat([
      {
        $match: {
          $or: this.multiSearch(['name'], searchstring),
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: '_id',
          foreignField: 'class_id',
          as: 'students',
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
        $set: {
          studentCount: {
            $size: '$students',
          },
        },
      },
      {
        $unset: ['class'],
      },
    ]);
    // console.log(JSON.stringify(query));
    const data = await this.tClassModel.aggregate(query);
    return data;
  }

  async addNew(class_name: string, grade_id: string) {
    try {
      const data = {
        name: class_name,
        status: 'RUNNING',
        grade_id: new Types.ObjectId(grade_id),
        start_from: new Date(),
        end_to: addYears(new Date(), 1),
      };
      const newadmin = await new this.tClassModel({
        ...data,
      });

      const adminresult = await newadmin.save();

      return adminresult;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getByID(id: string) {
    const user = await this.tClassModel.findById(id).exec();
    const raw = user.toObject();
    return raw;
  }

  async getStatics() {
    const data = await this.tClassModel.aggregate([
      {
        $lookup: {
          from: 'students',
          localField: '_id',
          foreignField: 'class_id',
          as: 'students',
        },
      },
      {
        $set: {
          studentCount: {
            $size: '$students',
          },
        },
      },
      {
        $unset: ['class'],
      },
    ]);
    return data;
  }

  async deleteOne(id: string) {
    try {
      let query = [];
      query.push({ $match: { delete_at: null, _id: new Types.ObjectId(id) } });
      query = query.concat([
        {
          $lookup: {
            from: 'students',
            localField: '_id',
            foreignField: 'class_id',
            as: 'students',
          },
        },
        {
          $set: {
            studentCount: {
              $size: '$students',
            },
          },
        },
        {
          $unset: ['class'],
        },
      ]);
      const check = await this.tClassModel.aggregate(query);
      if (check.length > 0) {
        if (check[0].studentCount > 0) {
          throw new HttpException(
            'Không thể xóa lớp có thành viên',
            HttpStatus.FORBIDDEN,
          );
        }
      }
      const data = await this.tClassModel.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        {
          delete_at: new Date(),
        },
      );
      console.log(data);
      if (data != null) {
        return data;
      } else {
        throw new HttpException('Không tìm thấy lớp', HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      throw error;
    }
  }
}
