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
import { EmployeeService } from './employee.service';
import { AppController } from 'src/app.controller';
import { AuthService } from '../auth/auth.service';
import { SubjectService } from '../subject/subject.service';
export declare class EmployeeController extends AppController {
    private employeeService;
    private authService;
    private subjectService;
    private readonly logger;
    constructor(employeeService: EmployeeService, authService: AuthService, subjectService: SubjectService);
    getAll(req: any, body: any): Promise<{
        original: any[];
        total: number;
    }>;
    getInfor(req: any, body: any): Promise<(import("mongoose").Document<unknown, {}, import("./schema/employee.schema").EmployeeDocument> & import("./schema/employee.schema").T_Employee & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createOne(req: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/employee.schema").EmployeeDocument> & import("./schema/employee.schema").T_Employee & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMany(req: any, body_list: any): Promise<void>;
    DeleteOne(param: any, req: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/employee.schema").EmployeeDocument> & import("./schema/employee.schema").T_Employee & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    UpdateOne(param: any, req: any, body: any): Promise<import("mongoose").FlattenMaps<import("./schema/employee.schema").EmployeeDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
