import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AccountDocument, T_Account } from './schema/t_account.schema';
import { OauthAccessTokenDocument } from './schema/oauth_access_tokens.schema';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { RegexCommon } from 'src/common/regexVietnamese';
import { Role, RoleDocument } from './schema/role.schema';
import { SchoolYearService } from '../schoolyear/schoolyear.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(T_Account.name)
    private readonly tAccountModel: Model<AccountDocument>,
    @InjectModel(Role.name)
    private readonly tRoleModel: Model<RoleDocument>,
    @InjectModel('oauth_access_tokens')
    private readonly oauthAccessToken: Model<OauthAccessTokenDocument>,
    private jwtService: JwtService,
    private semesterService: SchoolYearService,
  ) {}

  async logIn(userLogin: AccountDocument) {
    try {
      if (!userLogin || userLogin.delete_at) {
        throw new UnauthorizedException();
      }
      const payload = {
        username: userLogin.user_name,
        sub: userLogin._id,
        token: uuidv4(),
        ref_family_id: userLogin.ref_family_id,
        role_key: userLogin.role_key,
        full_name: userLogin.full_name,
      };
      if (userLogin.is_reset) {
        const raw = userLogin.toObject();
        return {
          user: raw,
        };
      }
      // Tạo OauthAccess
      const newOauthAccess = new this.oauthAccessToken({
        token: payload.token,
        user_id: userLogin._id,
        full_name: userLogin.full_name,
        revoked: 0,
      });

      newOauthAccess.save();

      const raw = userLogin.toObject();
      delete raw.password;
      return {
        accessToken: this.jwtService.sign(payload),
        user: raw,
        semester: await this.semesterService.getCurrentSemester(),
      };
    } catch (error) {
      throw error;
    }
  }

  async validateUser(user_name: string, password: string) {
    if (
      user_name != '' &&
      user_name != null &&
      password != '' &&
      password != null
    ) {
      const user = await this.tAccountModel
        .findOne({
          user_name: user_name,
          delete_at: null,
        })
        .exec();
      if (user && bcrypt.compareSync(password, user.password)) {
        return user;
      }
    }

    return null;
  }

  async onRevokeToken(token: string) {
    // await this.oauthAccessToken.findOneAndUpdate(
    //   { token: token },
    //   { revoked: 1 },
    // );
    await this.oauthAccessToken.deleteOne({ token });
    return true;
  }

  async getUser(id: string) {
    const user = await this.tAccountModel.findById(id).exec();
    const raw = user.toObject();
    delete raw.password;
    return raw;
  }

  async updateUser(
    id: string,
    full_name: string,
    user_name: string,
    email: string,
    gender: number,
    phone: string,
    birth_day?: Date,
    address?: string,
    parent_name?: string,
  ) {
    const data = await this.tAccountModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id), delete_at: null },
      {
        user_name: user_name,
        full_name,
        email,
        birth_day,
        gender,
        phone,
      },
      { new: true },
    );
    let table_name;
    switch (data.role_key) {
      case 'STUDENTS':
        table_name = 'students';
        break;
      case 'TEACHER':
        table_name = 'teachers';
        break;
      case 'TEACHER2':
        table_name = 'employee';
        break;
      default:
        break;
    }
    let data_update = {};
    if (address) {
      data_update = Object.assign(data_update, { address });
    }
    if (parent_name) {
      data_update = Object.assign(data_update, { parent_name });
    }
    if (data_update) {
      await this.tAccountModel.aggregate([
        {
          $match: {
            _id: data._id,
          },
        },
        {
          $lookup: {
            from: table_name,
            localField: '_id',
            foreignField: 'account_id',
            as: table_name,
            pipeline: [
              {
                $match: {
                  delete_at: null,
                },
              },
            ],
          },
        },
        { $unwind: `$${table_name}` },
        { $replaceRoot: { newRoot: `$${table_name}` } },
        {
          $set: data_update,
        },
        {
          $merge: {
            into: table_name,
            on: '_id',
            whenMatched: 'merge',
            whenNotMatched: 'fail',
          },
        },
      ]);
    }
    return data;
  }

  async resetPassword(id: string, new_pwd: string, cur_pwd: string) {
    try {
      const hashPwd = await bcrypt.hashSync(new_pwd, 10);
      const user = await this.tAccountModel
        .findOne({
          _id: new Types.ObjectId(id),
          delete_at: null,
        })
        .exec();
      if (user && bcrypt.compareSync(cur_pwd, user.password)) {
        const rst = await this.tAccountModel.findOneAndUpdate(
          { _id: new Types.ObjectId(id) },
          { password: hashPwd },
          { new: true },
        );
        if (rst) {
          return true;
        }
      } else {
        throw new HttpException('Không đúng mật khẩu cũ', HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      throw error;
    }
  }

  async forgotPass(email: string, new_pwd = '123456') {
    try {
      const hashPwd = await bcrypt.hashSync(new_pwd, 10);
      const rst = await this.tAccountModel
        .findOneAndUpdate(
          { email: email },
          { password: hashPwd, is_reset: true },
          { new: true },
        )
        .lean();
      if (rst) {
        return rst;
      }
    } catch (error) {
      throw error;
    }
  }

  async reCreatePass(id: string, new_pwd: string) {
    try {
      const hashPwd = await bcrypt.hashSync(new_pwd, 10);
      const rst = await this.tAccountModel.findOneAndUpdate(
        { _id: new Types.ObjectId(id), is_reset: true },
        { password: hashPwd, is_reset: false },
        { new: true },
      );
      if (rst) {
        const res = await this.logIn(rst);
        return res;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAll(
    idUser: string,
    searchstring: string,
    rowsPerpage?: number,
    currentPage?: number,
  ) {
    const sortvalue = -1;

    let query = [];

    query = [
      {
        $match: {
          delete_at: null,
          _id: { $ne: new Types.ObjectId(idUser) },
          $or: [
            {
              full_name: {
                $regex: new RegExp(RegexCommon.regexVietnamese(searchstring)),
                $options: 'i',
              },
            },
            {
              email: {
                $regex: new RegExp(RegexCommon.regexVietnamese(searchstring)),
                $options: 'i',
              },
            },
            {
              phone: {
                $regex: new RegExp(RegexCommon.regexVietnamese(searchstring)),
                $options: 'i',
              },
            },
            {
              user_name: {
                $regex: new RegExp(RegexCommon.regexVietnamese(searchstring)),
                $options: 'i',
              },
            },
          ],
        },
      },
      {
        $sort: {
          create_at: sortvalue,
        },
      },
    ];

    query.push({
      $setWindowFields: { output: { totalCount: { $count: {} } } },
    });

    if (rowsPerpage != undefined && currentPage != undefined) {
      query.push({ $skip: rowsPerpage * currentPage });
      query.push({ $limit: rowsPerpage });
    }

    const data = await this.tAccountModel.aggregate(query);
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

  async addNew(
    user_name: string,
    pwd: string,
    full_name: string,
    gender?: number,
    phone?: string,
    email?: string,
    birth_day?: Date,
    role_key?: string,
  ) {
    try {
      const validateExists = await this.tAccountModel.find({
        $or: [{ user_name: user_name }],
        delete_at: null,
      });

      if (validateExists.length > 0) {
        const duplicate_data = [];
        if (validateExists.some((x) => x.user_name == user_name)) {
          duplicate_data.push('Tên tài khoản');
        }

        throw new HttpException(
          `Dữ liệu ${duplicate_data.join(' ,')} đã tồn tại`,
          HttpStatus.FORBIDDEN,
        );
      } else {
        const hashPwd = await bcrypt.hashSync(pwd, 10);

        const admin_infor = {
          user_name,
          password: hashPwd,
          full_name,
          gender,
          phone,
          email,
          birth_day,
          registration_date: new Date(),
          role_key,
        };

        const newadmin = await new this.tAccountModel({
          ...admin_infor,
        });

        const adminresult = await newadmin.save();

        return adminresult;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addMany(body_list: any) {
    try {
      body_list.forEach(async (body) => {
        const {
          user_name,
          pwd,
          full_name,
          gender,
          phone,
          email,
          dob,
          role_key,
        } = body;
        const validateExists = await this.tAccountModel.find({
          $or: [{ user_name: user_name }],
          delete_at: null,
        });

        if (validateExists.length > 0) {
          const duplicate_data = [];
          if (validateExists.some((x) => x.user_name == user_name)) {
            duplicate_data.push('Tên tài khoản');
          }

          throw new HttpException(
            `Dữ liệu ${duplicate_data.join(' ,')} đã tồn tại`,
            HttpStatus.FORBIDDEN,
          );
        } else {
          const hashPwd = await bcrypt.hashSync(pwd, 10);

          const admin_infor = {
            user_name,
            password: hashPwd,
            full_name,
            gender,
            phone,
            email,
            dob,
            registration_date: new Date(),
            role_key,
          };

          const newadmin = await new this.tAccountModel({
            ...admin_infor,
          });

          await newadmin.save();

          return true;
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getInfor(id: string) {
    const data = await this.tAccountModel.aggregate([
      { $match: { _id: new Types.ObjectId(id), delete_at: null } },
      {
        $lookup: {
          from: 'teachers',
          localField: '_id', // field in the orders collection
          foreignField: 'account_id', // field in the items collection
          as: 'teacher',
        },
      },
      {
        $lookup: {
          from: 'students',
          localField: '_id', // field in the orders collection
          foreignField: 'account_id', // field in the items collection
          as: 'student',
        },
      },
      {
        $lookup: {
          from: 'employee',
          localField: '_id', // field in the orders collection
          foreignField: 'account_id', // field in the items collection
          as: 'employee',
        },
      },
      { $unwind: { preserveNullAndEmptyArrays: true, path: '$teacher' } },
      { $unwind: { preserveNullAndEmptyArrays: true, path: '$student' } },
      {
        $set: {
          class_id: {
            $ifNull: ['$teacher.class_id', '$student.class_id', null],
          },
        },
      },
      {
        $lookup: {
          from: 'classes',
          localField: 'class_id', // field in the orders collection
          foreignField: '_id', // field in the items collection
          as: 'class',
        },
      },
      {
        $lookup: {
          from: 'grades',
          localField: 'class.grade_id', // field in the orders collection
          foreignField: '_id', // field in the items collection
          as: 'grade',
        },
      },
    ]);
    if (data) {
      delete data[0].password;
    }
    return data[0] || null;
  }

  async deleteOne(id: string) {
    try {
      const data = await this.tAccountModel.findOneAndUpdate(
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

  async resetUserPwd(id: string, pwd: string) {
    try {
      const hashPwd = await bcrypt.hashSync(pwd, 10);
      const data = await this.tAccountModel.findOneAndUpdate(
        { _id: id, delete_at: null },
        {
          password: hashPwd,
        },
        { new: true },
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

  async getPrivilege(id: string) {
    console.log(id);
    const data = await this.tAccountModel.aggregate([
      { $match: { _id: new Types.ObjectId(id), delete_at: null } },
      {
        $lookup: {
          from: 'roles',
          localField: 'role_key', // field in the orders collection
          foreignField: 'role_key', // field in the items collection
          as: 'role_priv',
        },
      },
      { $unwind: '$role_priv' },
      {
        $lookup: {
          from: 'privileges',
          localField: 'role_priv.list_privilege', // field in the orders collection
          foreignField: '_id', // field in the items collection
          as: 'privileges',
        },
      },
      { $unwind: '$privileges' },
      { $replaceRoot: { newRoot: '$privileges' } },
    ]);
    return data;
  }

  async getAllRole() {
    const data = await this.tRoleModel.aggregate([
      { $match: { role_key: { $nin: ['ADMIN', 'TEACHER', 'STUDENTS'] } } },
      {
        $project: {
          role_key: 1,
          role_name: 1,
        },
      },
    ]);
    return data;
  }

  async getStatics() {
    const data = await this.tRoleModel.aggregate([
      { $match: { role_key: { $nin: ['ADMIN', 'STUDENTS'] } } },
      {
        $count: 'count',
      },
    ]);
    return data[0].count || 0;
  }
}
