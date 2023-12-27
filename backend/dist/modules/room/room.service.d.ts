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
import { RoomDocument, T_Room } from './schema/room.schema';
export declare class RoomService {
    private tRoomModel;
    constructor(tRoomModel: Model<RoomDocument>);
    getAll(class_id?: string): Promise<any[]>;
    getStatics(): Promise<any[]>;
    getInfor(id: any): Promise<any>;
    deleteInfor(id: any): Promise<import("mongoose").Document<unknown, {}, RoomDocument> & T_Room & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    addOne(name: string): Promise<import("mongoose").Document<unknown, {}, RoomDocument> & T_Room & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
