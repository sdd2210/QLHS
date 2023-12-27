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
export type AccountDocument = T_Account & Document;
export declare class T_Account {
    user_name: string;
    password: string;
    full_name: string;
    avatar_url: string;
    thumbnail_url: string;
    ref_family_id: string;
    birth_day: Date;
    is_reset: boolean;
    phone: string;
    email: string;
    registration_date: Date;
    gender: number;
    role_key: string;
    create_at: Date;
    update_at: Date;
    delete_at: Date;
}
export declare const AccountSchema: import("mongoose").Schema<T_Account, import("mongoose").Model<T_Account, any, any, any, Document<unknown, any, T_Account> & T_Account & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, T_Account, Document<unknown, {}, import("mongoose").FlatRecord<T_Account>> & import("mongoose").FlatRecord<T_Account> & {
    _id: Types.ObjectId;
}>;
