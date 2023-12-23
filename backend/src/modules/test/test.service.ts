import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { RegexCommon } from 'src/common/regexVietnamese';
import { join } from 'path';
import { AppConstants } from 'src/config/constants';
import { Workbook } from 'exceljs';
import { TestDocument, T_Test } from './schema/test.schema';

@Injectable()
export class TestService {
  constructor(
    @InjectModel(T_Test.name) private tTestModel: Model<TestDocument>,
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
      const data = await this.tTestModel.aggregate(query);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createTest() {
    return true;
  }
}
