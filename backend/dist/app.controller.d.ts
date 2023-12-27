import { Response } from 'express';
export declare class AppController {
    sendResponseError(res: Response, message: string): Response<any, Record<string, any>>;
    sendResponseForbidden(res: Response, message: string): Response<any, Record<string, any>>;
    sendResponse(res: Response, message: string, data: any): Response<any, Record<string, any>>;
}
