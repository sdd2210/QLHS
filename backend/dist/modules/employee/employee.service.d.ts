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
import { EmployeeDocument, T_Employee } from './schema/employee.schema';
export declare class EmployeeService {
    private tEmployeeModel;
    constructor(tEmployeeModel: Model<EmployeeDocument>);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(searchstring: string, subject_id: string, status: string, rowsPerpage?: number, currentPage?: number): Promise<{
        original: any[];
        total: number;
    }>;
    getInfor(id: any): Promise<(import("mongoose").Document<unknown, {}, EmployeeDocument> & T_Employee & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    })[]>;
    createEmployee(body: any): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & T_Employee & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & T_Employee & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    addClass(employ_id: string, class_id: string, start_date: any, end_date: any): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & T_Employee & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    deleteClass(employ_id: string, class_id: string): Promise<import("mongoose").Document<unknown, {}, EmployeeDocument> & T_Employee & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    updateEmployee(id: any, body: any): Promise<import("mongoose").FlattenMaps<EmployeeDocument> & {
        _id: Types.ObjectId;
    }>;
}
