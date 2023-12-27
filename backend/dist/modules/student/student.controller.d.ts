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
import { CustomerService } from './student.service';
import { AppController } from 'src/app.controller';
import { AuthService } from '../auth/auth.service';
export declare class CustomerController extends AppController {
    private customerService;
    private authService;
    private readonly logger;
    constructor(customerService: CustomerService, authService: AuthService);
    getAll(req: any, body: any): Promise<{
        original: any[];
        total: number;
    }>;
    UpdateOne(param: any, req: any, body: any): Promise<import("mongoose").FlattenMaps<import("./schema/student.schema").StudentDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createOne(req: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schema/student.schema").StudentDocument> & import("./schema/student.schema").T_Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMany(req: any, body_list: any): Promise<void>;
    deleteOne(param: any, req: any, body: any): Promise<import("mongoose").Document<unknown, {}, import("../auth/schema/t_account.schema").AccountDocument> & import("../auth/schema/t_account.schema").T_Account & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
