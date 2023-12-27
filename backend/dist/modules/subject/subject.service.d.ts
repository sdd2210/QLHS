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
import { SubjectDocument, T_Subject } from './schema/subject.schema';
import { GradeService } from '../grade/grade.service';
export declare class SubjectService {
    private tSubjectModel;
    private gradeService;
    constructor(tSubjectModel: Model<SubjectDocument>, gradeService: GradeService);
    getAll(grade_id?: string): Promise<any[]>;
    getStatics(): Promise<any[]>;
    getInforByAlias(subject_key: any): Promise<(import("mongoose").Document<unknown, {}, SubjectDocument> & T_Subject & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }) | {
        _id: string;
    }>;
    getCommon(): Promise<(import("mongoose").Document<unknown, {}, SubjectDocument> & T_Subject & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    })[]>;
    createOne(body: any): Promise<import("mongoose").Document<unknown, {}, SubjectDocument> & T_Subject & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    deleteOne(grade_id: any): Promise<import("mongoose").Document<unknown, {}, SubjectDocument> & T_Subject & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    editOne(id: any, body: any): Promise<import("mongoose").Document<unknown, {}, SubjectDocument> & T_Subject & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
