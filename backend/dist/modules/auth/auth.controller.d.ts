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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AccountDocument, T_Account } from './schema/t_account.schema';
import { AppController } from 'src/app.controller';
import { EmailService } from 'src/common/mail.service';
import { Queue } from 'bull';
export declare class AuthController extends AppController {
    private authService;
    private emailService;
    private readonly mailQueue;
    private readonly logger;
    constructor(authService: AuthService, emailService: EmailService, mailQueue: Queue);
    login(req: any, res: Response): Promise<{
        user: any;
        accessToken?: undefined;
        semester?: undefined;
    } | {
        accessToken: string;
        user: any;
        semester: any;
    }>;
    resetPass(req: any, body: any, res: Response): Promise<{
        user: any;
        accessToken?: undefined;
        semester?: undefined;
    } | {
        accessToken: string;
        user: any;
        semester: any;
    }>;
    logout(req: any, res: Response): Promise<boolean>;
    getInfor(req: any, res: Response): Promise<any>;
    getStatic(req: any, res: Response): Promise<any>;
    UpdateInfor(req: any, body: any, res: Response): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    ResetPassword(req: any, body: any, res: Response): Promise<boolean>;
    ForgotPass(req: any, body: any, res: Response): Promise<import("mongoose").FlattenMaps<AccountDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    GetAllUser(req: any, body: any, res: Response): Promise<{
        original: any[];
        total: number;
    }>;
    UpdateUser(req: any, body: any, res: Response): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    CreateUser(req: any, body: any, res: Response): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    DeleteOne(param: any, req: any, res: Response): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    resetPwd(req: any, res: Response): Promise<import("mongoose").Document<unknown, {}, AccountDocument> & T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    GetInfor(param: any, res: Response): Promise<any>;
    GetPrivilege(req: any, body: any, res: Response): Promise<any[]>;
    GetAllRole(req: any, body: any, res: Response): Promise<any[]>;
}
