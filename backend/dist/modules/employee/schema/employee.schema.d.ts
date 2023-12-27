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
import { Document, Types } from 'mongoose';
export type EmployeeDocument = T_Employee & Document;
declare class ClassHistory {
    class_id: Types.ObjectId;
    start_date: Date;
    end_date: Date;
}
export declare class T_Employee {
    account_id: Types.ObjectId;
    avatar_url: string;
    employee_alias_string: string;
    employee_alias_number: number;
    thumbnail_url: string;
    subject_id: Types.ObjectId;
    class_list: Array<ClassHistory>;
    address: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const EmployeeSchema: import("mongoose").Schema<T_Employee, import("mongoose").Model<T_Employee, any, any, any, Document<unknown, any, T_Employee> & T_Employee & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Employee, Document<unknown, {}, import("mongoose").FlatRecord<T_Employee>> & import("mongoose").FlatRecord<T_Employee> & {
    _id: Types.ObjectId;
}>;
export {};
