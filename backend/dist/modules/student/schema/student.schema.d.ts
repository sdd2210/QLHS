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
export type StudentDocument = T_Student & Document;
declare class ClassHistory {
    class_id: Types.ObjectId;
    start_date: Date;
    end_date: Date;
}
export declare class T_Student {
    account_id: Types.ObjectId;
    avatar_url: string;
    student_alias_string: string;
    student_alias_number: number;
    thumbnail_url: string;
    parent_name: string;
    address: string;
    class_id: Types.ObjectId;
    class_list: ClassHistory[];
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const StudentSchema: import("mongoose").Schema<T_Student, import("mongoose").Model<T_Student, any, any, any, Document<unknown, any, T_Student> & T_Student & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Student, Document<unknown, {}, import("mongoose").FlatRecord<T_Student>> & import("mongoose").FlatRecord<T_Student> & {
    _id: Types.ObjectId;
}>;
export {};
