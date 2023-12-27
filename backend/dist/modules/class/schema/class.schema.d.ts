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
export type ClassDocument = T_Class & Document;
export declare class T_Class {
    name: string;
    class_key: string;
    grade_id: Types.ObjectId;
    description: string;
    status: string;
    start_from: Date;
    end_to: Date;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const ClassSchema: import("mongoose").Schema<T_Class, import("mongoose").Model<T_Class, any, any, any, Document<unknown, any, T_Class> & T_Class & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Class, Document<unknown, {}, import("mongoose").FlatRecord<T_Class>> & import("mongoose").FlatRecord<T_Class> & {
    _id: Types.ObjectId;
}>;
