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
export type TimeTableDocument = T_TimeTable & Document;
declare class SubjectList {
    subject_id: Types.ObjectId;
    teacher_id: Types.ObjectId;
    room_id: Types.ObjectId;
    order: number;
    start_date: Date;
    end_date: Date;
}
declare class ClassHistory {
    lesson_id: Types.ObjectId;
    list_subject: Array<SubjectList>;
    order: number;
    start_date: Date;
    end_date: Date;
}
export declare class T_TimeTable {
    class_id: Types.ObjectId;
    start_date: Date;
    end_date: Date;
    list_lesson: ClassHistory[];
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const TimeTableSchema: import("mongoose").Schema<T_TimeTable, import("mongoose").Model<T_TimeTable, any, any, any, Document<unknown, any, T_TimeTable> & T_TimeTable & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_TimeTable, Document<unknown, {}, import("mongoose").FlatRecord<T_TimeTable>> & import("mongoose").FlatRecord<T_TimeTable> & {
    _id: Types.ObjectId;
}>;
export {};
