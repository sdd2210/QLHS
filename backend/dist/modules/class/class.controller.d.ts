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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppController } from 'src/app.controller';
import { ClassService } from './class.service';
export declare class ClassController extends AppController {
    private classService;
    private readonly logger;
    constructor(classService: ClassService);
    getAll(req: any, body: any): Promise<any[]>;
    Create(req: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/class.schema").ClassDocument> & import("./schema/class.schema").T_Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    DeleteId(req: any, param: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/class.schema").ClassDocument> & import("./schema/class.schema").T_Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getById(req: any, param: any, body: any): Promise<import("./schema/class.schema").T_Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getStatics(req: any, param: any, body: any): Promise<any[]>;
}
