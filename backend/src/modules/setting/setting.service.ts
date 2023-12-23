/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SettingDocument } from './schema/setting.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel('m_setting') private SettingModel: Model<SettingDocument>,
  ) {}

  async getAll() {
    return this.SettingModel.find({}) || {};
  }

  async getEmail() {
    const data = await this.SettingModel.findOne({ title: 'email' }).lean();
    return {
      email: data.details.find((x: any) => x.key == 'account').value,
      password: data.details.find((x: any) => x.key == 'password').value,
      port: data.details.find((x: any) => x.key == 'port').value,
      host: data.details.find((x: any) => x.key == 'host').value,
      secure: data.details.find((x: any) => x.key == 'secure').value,
      from: data.details.find((x: any) => x.key == 'from').value,
      cc: data.details.find((x: any) => x.key == 'cc').value,
      from_name: data.details.find((x: any) => x.key == 'from_name').value,
      timeout: data.details.find((x: any) => x.key == 'timeout').value,
    };
  }

  async updateSetting(id: string, details: any) {
    try {
      const user = await this.SettingModel.findById(id).lean();
      if (user == null) {
        throw new HttpException(
          'Không tìm thấy cấu hình',
          HttpStatus.BAD_REQUEST,
        );
      }
      const update_detail = user.details.map(
        (obj) => details.find((o) => o.key === obj.key) || obj,
      );

      const data = await this.SettingModel.findOneAndUpdate(
        { _id: new Types.ObjectId(id) },
        {
          details: update_detail,
        },
        {
          new: true,
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
