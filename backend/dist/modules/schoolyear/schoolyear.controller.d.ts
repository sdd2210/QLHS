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
import { SchoolYearService } from './schoolyear.service';
import { AppController } from 'src/app.controller';
export declare class SchoolYearController extends AppController {
    private gradeService;
    private readonly logger;
    constructor(gradeService: SchoolYearService);
    getAll(req: any, body: any): Promise<{
        original: any[];
        total: number;
    }>;
    getStatics(req: any, param: any, body: any): Promise<any[]>;
    addNew(req: any, param: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/schoolyear.schema").SchoolYearDocument> & import("./schema/schoolyear.schema").T_SchoolYear & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCurrentSemester(req: any, param: any, body: any): Promise<any>;
    getCurrentSchoolYear(req: any, param: any, body: any): Promise<any[]>;
}
