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
import { Document, Schema as MSchema } from 'mongoose';
export type SettingDocument = Setting & Document;
declare class SettingDetail {
    key: string;
    value: any;
}
export declare class Setting {
    title: string;
    details: Array<SettingDetail>;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const SettingSchema: MSchema<Setting, import("mongoose").Model<Setting, any, any, any, Document<unknown, any, Setting> & Setting & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Setting, Document<unknown, {}, import("mongoose").FlatRecord<Setting>> & import("mongoose").FlatRecord<Setting> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
