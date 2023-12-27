import { LevelService } from './level.service';
import { AppController } from 'src/app.controller';
import { GradeService } from '../grade/grade.service';
export declare class LevelController extends AppController {
    private levelService;
    private gradeService;
    private readonly logger;
    constructor(levelService: LevelService, gradeService: GradeService);
    getAll(req: any, body: any): Promise<any[]>;
    getInforBykey(key: any): Promise<any[]>;
    getInforBygrade(key: any): Promise<any[]>;
    getStatics(req: any, param: any, body: any): Promise<any[]>;
}
