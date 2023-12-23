import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { LessonDocument, T_Lesson } from './schema/lesson.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(T_Lesson.name) private tLessonModel: Model<LessonDocument>,
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
    searchstring?: string,
    class_id?: string,
    status?: string,
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
      ];

      query.push({
        $sort: {
          create_at: sortvalue,
        },
      });
      if (rowsPerpage != undefined && currentPage != undefined) {
        query.push({ $skip: rowsPerpage * currentPage });
        query.push({ $limit: rowsPerpage });
      }
      const data = await this.tLessonModel.aggregate(query);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createLesson(body: any) {
    return true;
  }
}
