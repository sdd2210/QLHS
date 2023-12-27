import { TestService } from './test.service';
import { AppController } from 'src/app.controller';
export declare class TestController extends AppController {
    private testService;
    private readonly logger;
    constructor(testService: TestService);
    getAll(req: any, body: any): Promise<any[]>;
    createOne(req: any, body: any): Promise<boolean>;
}
