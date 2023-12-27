import { Model } from 'mongoose';
import { TestDocument } from './schema/test.schema';
export declare class TestService {
    private tTestModel;
    constructor(tTestModel: Model<TestDocument>);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(searchstring?: string, class_id?: string, status?: string, rowsPerpage?: number, currentPage?: number): Promise<any[]>;
    createTest(): Promise<boolean>;
}
