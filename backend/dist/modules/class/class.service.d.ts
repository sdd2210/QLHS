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
import { Model, Types } from 'mongoose';
import { ClassDocument, T_Class } from './schema/class.schema';
import { AuthService } from '../auth/auth.service';
export declare class ClassService {
    private tClassModel;
    private authService;
    constructor(tClassModel: Model<ClassDocument>, authService: AuthService);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(grade_id?: string, grade_key?: string, searchstring?: any, user_id?: any): Promise<any[]>;
    addNew(class_name: string, grade_id: string): Promise<import("mongoose").Document<unknown, {}, ClassDocument> & T_Class & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    getByID(id: string): Promise<T_Class & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    getStatics(): Promise<any[]>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, ClassDocument> & T_Class & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
