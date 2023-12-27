/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { JwtService } from '@nestjs/jwt';
import { Model, Types } from 'mongoose';
import { AccountDocument, T_Account } from './schema/t_account.schema';
import { OauthAccessTokenDocument } from './schema/oauth_access_tokens.schema';
import { RoleDocument } from './schema/role.schema';
import { SchoolYearService } from '../schoolyear/schoolyear.service';
export declare class AuthService {
    private readonly tAccountModel;
    private readonly tRoleModel;
    private readonly oauthAccessToken;
    private jwtService;
    private semesterService;
    constructor(tAccountModel: Model<AccountDocument>, tRoleModel: Model<RoleDocument>, oauthAccessToken: Model<OauthAccessTokenDocument>, jwtService: JwtService, semesterService: SchoolYearService);
    logIn(userLogin: AccountDocument): Promise<{
        user: any;
        accessToken?: undefined;
        semester?: undefined;
    } | {
        accessToken: string;
        user: any;
        semester: any;
    }>;
    validateUser(user_name: string, password: string): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    onRevokeToken(token: string): Promise<boolean>;
    getUser(id: string): Promise<T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    updateUser(id: string, full_name: string, user_name: string, email: string, gender: number, phone: string, birth_day?: Date, address?: string, parent_name?: string): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    resetPassword(id: string, new_pwd: string, cur_pwd: string): Promise<boolean>;
    forgotPass(email: string, new_pwd?: string): Promise<import("mongoose").FlattenMaps<AccountDocument> & {
        _id: Types.ObjectId;
    }>;
    reCreatePass(id: string, new_pwd: string): Promise<{
        user: any;
        accessToken?: undefined;
        semester?: undefined;
    } | {
        accessToken: string;
        user: any;
        semester: any;
    }>;
    getAll(idUser: string, searchstring: string, rowsPerpage?: number, currentPage?: number): Promise<{
        original: any[];
        total: number;
    }>;
    addNew(user_name: string, pwd: string, full_name: string, gender?: number, phone?: string, email?: string, birth_day?: Date, role_key?: string): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    addMany(body_list: any): Promise<void>;
    getInfor(id: string): Promise<any>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    resetUserPwd(id: string, pwd: string): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    getPrivilege(id: string): Promise<any[]>;
    getAllRole(): Promise<any[]>;
    getStatics(): Promise<any>;
}
