import { LessonService } from './lesson.service';
import { AppController } from 'src/app.controller';
export declare class LessonController extends AppController {
    private customerService;
    private readonly logger;
    constructor(customerService: LessonService);
    getAll(req: any, body: any): Promise<any[]>;
    createOne(req: any, body: any): Promise<void>;
}
