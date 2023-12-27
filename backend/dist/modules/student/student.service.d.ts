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
import { StudentDocument, T_Student } from './schema/student.schema';
export declare class CustomerService {
    private tCustomerModel;
    constructor(tCustomerModel: Model<StudentDocument>);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(searchstring: string, class_id: string, status: string, rowsPerpage?: number, currentPage?: number): Promise<{
        original: any[];
        total: number;
    }>;
    createStudent(body: any): Promise<import("mongoose").Document<unknown, {}, StudentDocument> & T_Student & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    updateStudent(id: any, body: any): Promise<import("mongoose").FlattenMaps<StudentDocument> & {
        _id: Types.ObjectId;
    }>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, StudentDocument> & T_Student & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
