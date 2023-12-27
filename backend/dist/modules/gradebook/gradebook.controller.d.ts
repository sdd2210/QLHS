import { GradebookService } from './gradebook.service';
import { AppController } from 'src/app.controller';
export declare class GradebookController extends AppController {
    private gradebookService;
    private readonly logger;
    constructor(gradebookService: GradebookService);
    getAll(req: any, body: any): Promise<any[]>;
    upsertData(req: any, body: any): Promise<import("mongodb").BulkWriteResult>;
}
