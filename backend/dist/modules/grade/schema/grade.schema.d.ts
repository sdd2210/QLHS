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
export type GradeDocument = T_Grade & Document;
export declare class T_Grade {
    name: string;
    grade_key: string;
    level_id: Types.ObjectId;
    description: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const GradeSchema: import("mongoose").Schema<T_Grade, import("mongoose").Model<T_Grade, any, any, any, Document<unknown, any, T_Grade> & T_Grade & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Grade, Document<unknown, {}, import("mongoose").FlatRecord<T_Grade>> & import("mongoose").FlatRecord<T_Grade> & {
    _id: Types.ObjectId;
}>;
