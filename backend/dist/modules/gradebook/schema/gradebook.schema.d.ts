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
export type GradebookDocument = T_Gradebook & Document;
declare class Test {
    test_id: Types.ObjectId;
    value: string;
}
export declare class T_Gradebook {
    class_id: Types.ObjectId;
    student_id: Types.ObjectId;
    subject_id: Types.ObjectId;
    list_test: Array<Test>;
    semester: number;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const GradebookSchema: import("mongoose").Schema<T_Gradebook, import("mongoose").Model<T_Gradebook, any, any, any, Document<unknown, any, T_Gradebook> & T_Gradebook & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Gradebook, Document<unknown, {}, import("mongoose").FlatRecord<T_Gradebook>> & import("mongoose").FlatRecord<T_Gradebook> & {
    _id: Types.ObjectId;
}>;
export {};
