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
import { Document } from 'mongoose';
export type OauthAccessTokenDocument = OauthAccessToken & Document;
export declare class OauthAccessToken {
    token: string;
    user_id: string;
    ref_family_id: string;
    revoked: number;
    created_at: Date;
    updated_at: Date;
}
export declare const OauthAccessTokenSchema: import("mongoose").Schema<OauthAccessToken, import("mongoose").Model<OauthAccessToken, any, any, any, Document<unknown, any, OauthAccessToken> & OauthAccessToken & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OauthAccessToken, Document<unknown, {}, import("mongoose").FlatRecord<OauthAccessToken>> & import("mongoose").FlatRecord<OauthAccessToken> & {
    _id: import("mongoose").Types.ObjectId;
}>;
