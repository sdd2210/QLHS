/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { TimeTableDocument, T_TimeTable } from './schema/timetable.schema';
import { LessonService } from '../lesson/lesson.service';
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class TimeTableService {
  constructor(
    @InjectModel(T_TimeTable.name)
    private tTimeTableModel: Model<TimeTableDocument>,
    private lessonService: LessonService,
    private employeeService: EmployeeService,
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
          },
        },
        {
          $match: {
            $or: this.multiSearch(
              ['full_name', 'email', 'phone', 'student_code'],
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
      const data = await this.tTimeTableModel.aggregate(query);
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

  async getByClass(class_id: string, current_date: any) {
    let query = [
      {
        $match: {
          class_id: new Types.ObjectId(class_id),
        },
      },
      {
        $unwind: '$list_lesson',
      },
    ] as any[];
    if (current_date) {
      const cur_day = new Date(current_date);
      query.push({
        $set: {
          'list_lesson.list_subject': {
            $filter: {
              input: '$list_lesson.list_subject',
              as: 'item',
              cond: {
                $and: [
                  { $lte: ['$$item.start_date', cur_day] },
                  { $gte: ['$$item.end_date', cur_day] },
                ],
              },
            },
          },
        },
      });
    }
    query = query.concat([
      {
        $lookup: {
          from: 'subjects',
          localField: 'list_lesson.list_subject.subject_id',
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
      },
      {
        $lookup: {
          from: 'employee',
          localField: 'list_lesson.list_subject.teacher_id',
          foreignField: '_id',
          as: 'employee',
          pipeline: [
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
          ],
        },
      },
    ]);
    const data = await this.tTimeTableModel.aggregate(query);
    return data;
  }
  async getByEmployee(employee_id: string, current_date: any) {
    const query = [
      {
        $unwind: '$list_lesson',
      },
    ] as any[];
    const check = [];
    if (employee_id) {
      check.push({
        $eq: ['$$item.teacher_id', new Types.ObjectId(employee_id)],
      });
    }
    if (current_date) {
      const cur_day = new Date(current_date);
      check.push({ $lte: ['$$item.start_date', cur_day] });
      check.push({ $gte: ['$$item.end_date', cur_day] });
    }
    query.push({
      $set: {
        'list_lesson.list_subject': {
          $filter: {
            input: '$list_lesson.list_subject',
            as: 'item',
            cond: {
              $and: check,
            },
          },
        },
      },
    });

    query.push({
      $match: { $expr: { $gt: [{ $size: '$list_lesson.list_subject' }, 0] } },
    });
    query.push({
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
    });
    const data = await this.tTimeTableModel.aggregate(query);
    // .findOne({ class_id: new Types.ObjectId(class_id) })
    // .lean();
    return data;
  }

  async createTimeTable(body: any) {}

  async addLessontoClass(
    class_id: string,
    employee_id: string,
    subject_id: string,
    startdate: Date,
    enddate: Date,
    lesson: any,
    workday: any,
    room_id: any,
  ) {
    let timtable_id = null;
    const list_workday = workday.filter((x) => x.selected);

    const list_update_lesson = lesson.filter((x) => x.selected);
    const checkTimtable = await this.tTimeTableModel
      .findOne({ class_id: new Types.ObjectId(class_id) })
      .lean();
    timtable_id = checkTimtable?._id ?? null;
    let cur_lesson = checkTimtable?.list_lesson ?? [];
    const check_duplicate = await this.tTimeTableModel.aggregate([
      {
        $unwind: '$list_lesson',
      },
      {
        $unwind: '$list_lesson.list_subject',
      },
      // { $match: { class_id: { $ne: new Types.ObjectId(class_id) } } },
      {
        $match: {
          'list_lesson.order': {
            $in: list_update_lesson.map((x) => x.value - 1),
          },
          'list_lesson.list_subject.order': {
            $in: list_workday.map((x) => x.value - 2),
          },
        },
      },
      {
        $match: {
          $or: [
            {
              'list_lesson.list_subject.teacher_id': new Types.ObjectId(
                employee_id,
              ),
            },
            {
              'list_lesson.list_subject.room_id': new Types.ObjectId(room_id),
            },
          ],
        },
      },
    ]);
    if (check_duplicate.length > 0) {
      const teacher_infor = check_duplicate.filter(
        (o) => o.list_lesson.list_subject.teacher_id.toString() == employee_id,
      );
      const teacher_appear = check_duplicate
        .filter(
          (o) =>
            o.list_lesson.list_subject.teacher_id.toString() == employee_id,
        )
        .map((o) => o.list_lesson.list_subject.order);
      const check_day_teacher = list_workday.filter((x) => {
        return teacher_appear.includes(x.value - 2);
      });
      if (check_day_teacher.length > 0) {
        throw new HttpException(
          'Giáo viên bị có lịch học trùng',
          HttpStatus.BAD_REQUEST,
        );
      }

      const room_infor = check_duplicate.filter(
        (o) => o.list_lesson.list_subject.room_id.toString() == room_id,
      );
      const room_appear = check_duplicate
        .filter((o) => o.list_lesson.list_subject.room_id.toString() == room_id)
        .map((o) => o.list_lesson.list_subject.order);
      const check_day_room = list_workday.filter((x) => {
        return room_appear.includes(x.value - 2);
      });
      if (check_day_room.length > 0) {
        throw new HttpException('Phòng đã có tiết học', HttpStatus.BAD_REQUEST);
      }
    }
    if (!checkTimtable) {
      const list_lesson = await this.lessonService.getAll();
      const new_timtable = {
        class_id: new Types.ObjectId(class_id),
        start_date: startdate,
        end_date: enddate,
        list_lesson: list_lesson.map((x, i) => ({
          lesson_id: x._id,
          order: i,
          list_subject: Array.from({ length: 6 }, () => {
            return { order: 1 };
          }).map((x, i) => ({ order: i })),
        })),
      };
      const newOauthAccess = new this.tTimeTableModel(new_timtable);
      await newOauthAccess.save();
      timtable_id = newOauthAccess._id;
      cur_lesson = newOauthAccess.list_lesson;
    }

    cur_lesson = cur_lesson.map((x) => {
      if (
        list_update_lesson.filter((o) => o.value == x.lesson_id.toString())
          .length > 0
      ) {
        list_workday.map((k) => {
          console.log(subject_id);
          x.list_subject[k.value - 2].subject_id = new Types.ObjectId(
            subject_id,
          );
          x.list_subject[k.value - 2].teacher_id = new Types.ObjectId(
            employee_id,
          );
          x.list_subject[k.value - 2].room_id = new Types.ObjectId(room_id);
          x.list_subject[k.value - 2].start_date = startdate;
          x.list_subject[k.value - 2].end_date = enddate;
        });
      }
      return x;
    });
    const updateData = await this.tTimeTableModel
      .findOneAndUpdate(
        {
          _id: timtable_id,
        },
        {
          $set: {
            list_lesson: cur_lesson,
            start_date: startdate,
            end_date: enddate,
          },
        },
      )
      .lean();
    const employee_add = await this.employeeService.addClass(
      employee_id,
      class_id,
      updateData.start_date,
      updateData.end_date,
    );
    return updateData;
  }

  async editLessontoClass(
    class_id: string,
    employee_id: string,
    subject_id: string,
    startdate: Date,
    enddate: Date,
    lesson_id: any,
    order: number,
    room_id: any,
  ) {
    const check_teacher = await this.tTimeTableModel.aggregate([
      {
        $unwind: '$list_lesson',
      },
      {
        $unwind: '$list_lesson.list_subject',
      },
      {
        $match: {
          'list_lesson.list_subject.teacher_id': new Types.ObjectId(
            employee_id,
          ),
          'list_lesson._id': new Types.ObjectId(lesson_id),
          'list_lesson.list_subject.order': order,
          $or: [
            {
              $and: [{}],
            },
            {
              $and: [{}],
            },
          ],
        },
      },
    ]);
  }
}
