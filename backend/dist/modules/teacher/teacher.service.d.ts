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
import { TeacherDocument, T_Teacher } from './schema/teacher.schema';
export declare class TeacherService {
    private tTeacherModel;
    constructor(tTeacherModel: Model<TeacherDocument>);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(searchstring: string, class_id: string, status: string, rowsPerpage?: number, currentPage?: number): Promise<{
        original: any[];
        total: number;
    }>;
    createTeacher(body: any): Promise<import("mongoose").Document<unknown, {}, TeacherDocument> & T_Teacher & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
