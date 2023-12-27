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
import { TimeTableService } from './timetable.service';
import { AppController } from 'src/app.controller';
import { AuthService } from '../auth/auth.service';
export declare class TimeTableController extends AppController {
    private customerService;
    private authService;
    private readonly logger;
    constructor(customerService: TimeTableService, authService: AuthService);
    getAll(req: any, body: any): Promise<void>;
    getbyClass(req: any, body: any): Promise<any[]>;
    getbyEmployee(req: any, body: any): Promise<any[]>;
    createOne(req: any, body: any): Promise<import("mongoose").FlattenMaps<import("./schema/timetable.schema").TimeTableDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateOne(req: any, body: any): Promise<import("mongoose").UpdateWriteOpResult>;
}
