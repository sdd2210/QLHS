import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
// import * as bcrypt from 'bcrypt';
// import { RegexCommon } from 'src/common/regexVietnamese';
// import { join } from 'path';
// import { AppConstants } from 'src/config/constants';
// import { Workbook } from 'exceljs';
import { SchoolYearDocument, T_SchoolYear } from './schema/schoolyear.schema';

@Injectable()
export class SchoolYearService {
  constructor(
    @InjectModel(T_SchoolYear.name)
    private tSchoolYearModel: Model<SchoolYearDocument>,
  ) {}

  async addOne(body: any) {
    const { name, first_start, first_end, second_start, second_end } = body;
    const first_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $or: [
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(first_start)] },
                  { $gte: ['$semester.end_date', new Date(first_start)] },
                ],
              },
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(first_end)] },
                  { $gte: ['$semester.end_date', new Date(first_end)] },
                ],
              },
            ],
          },
        },
      },
    ]);
    if (first_semester.length > 0) {
      throw new HttpException(
        'Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I',
        HttpStatus.BAD_REQUEST,
      );
    }

    const second_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $or: [
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(second_start)] },
                  { $gte: ['$semester.end_date', new Date(second_start)] },
                ],
              },
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(second_end)] },
                  { $gte: ['$semester.end_date', new Date(second_end)] },
                ],
              },
            ],
          },
        },
      },
    ]);
    if (second_semester.length > 0) {
      throw new HttpException(
        'Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(second_semester);
    const new_data = {
      name: name,
      semester: [
        {
          order: 1,
          start_date: new Date(first_start),
          end_date: new Date(first_end),
        },
        {
          order: 2,
          start_date: new Date(second_start),
          end_date: new Date(second_end),
        },
      ],
    };
    const new_semester = new this.tSchoolYearModel(new_data);
    await new_semester.save();
    return new_semester;
  }

  async editOne(body: any) {
    const { name, first_start, first_end, second_start, second_end } = body;
    const first_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $or: [
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(first_start)] },
                  { $gte: ['$semester.end_date', new Date(first_start)] },
                ],
              },
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(first_end)] },
                  { $gte: ['$semester.end_date', new Date(first_end)] },
                ],
              },
            ],
          },
        },
      },
    ]);
    if (first_semester.length > 0) {
      throw new HttpException(
        'Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I',
        HttpStatus.BAD_REQUEST,
      );
    }

    const second_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $or: [
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(second_start)] },
                  { $gte: ['$semester.end_date', new Date(second_start)] },
                ],
              },
              {
                $and: [
                  { $lte: ['$semester.start_date', new Date(second_end)] },
                  { $gte: ['$semester.end_date', new Date(second_end)] },
                ],
              },
            ],
          },
        },
      },
    ]);
    if (second_semester.length > 0) {
      throw new HttpException(
        'Đã tồn tại học kì trong khoảng thời gian này. Vui lòng thay đổi thời gian học kì I',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(second_semester);
    const new_data = {
      name: name,
      semester: [
        {
          order: 1,
          start_date: new Date(first_start),
          end_date: new Date(first_end),
        },
        {
          order: 2,
          start_date: new Date(second_start),
          end_date: new Date(second_end),
        },
      ],
    };
    const new_semester = new this.tSchoolYearModel(new_data);
    await new_semester.save();
    return new_semester;
  }

  async getAll() {
    const query = [];
    query.push({ $match: { delete_at: null } });
    // if (level_id != 'all') {
    //   query.push({ $match: { level_id: new Types.ObjectId(level_id) } });
    // }
    // query = query.concat([
    //   {
    //     $lookup: {
    //       from: 'classes',
    //       localField: '_id',
    //       foreignField: 'grade_id',
    //       as: 'class',
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: 'students',
    //       localField: 'class._id',
    //       foreignField: 'class_id',
    //       as: 'students',
    //     },
    //   },
    //   {
    //     $set: {
    //       studentCount: {
    //         $size: '$students',
    //       },
    //       classCount: {
    //         $size: '$class',
    //       },
    //     },
    //   },
    //   {
    //     $unset: ['students', 'class'],
    //   },
    // ]);
    query.push({
      $setWindowFields: { output: { totalCount: { $count: {} } } },
    });
    const data = await this.tSchoolYearModel.aggregate(query);
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
  }

  async getStatics() {
    const data = await this.tSchoolYearModel.aggregate([
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

  async getCurrentSemester() {
    const cur_date = new Date();

    const current_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $and: [
              { $lte: ['$semester.start_date', cur_date] },
              { $gte: ['$semester.end_date', cur_date] },
            ],
          },
        },
      },
    ]);
    if (current_semester.length > 0) {
      return current_semester[0];
    }

    const lastest_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $and: [{ $lte: ['semester.end_date', cur_date] }],
        },
      },
      {
        $sort: { 'semester.end_date': -1 },
      },
    ]);
    if (lastest_semester.length > 0) {
      return lastest_semester[0];
    }

    throw new HttpException(
      'Bạn cần bắt đầu năm học mới',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
  async getCurrentSchoolYear() {
    const cur_date = new Date();

    const current_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $expr: {
            $and: [
              { $lte: ['$semester.start_date', cur_date] },
              { $gte: ['$semester.end_date', cur_date] },
            ],
          },
        },
      },
    ]);
    if (current_semester.length > 0) {
      return current_semester[0];
    }

    const lastest_semester = await this.tSchoolYearModel.aggregate([
      { $unwind: '$semester' },
      {
        $match: {
          $and: [{ $lte: ['semester.end_date', cur_date] }],
        },
      },
      {
        $sort: { 'semester.end_date': -1 },
      },
    ]);
    if (lastest_semester.length > 0) {
      return lastest_semester[0];
    }

    throw new HttpException(
      'Bạn cần bắt đầu năm học mới',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
