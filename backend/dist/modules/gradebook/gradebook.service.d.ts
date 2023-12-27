import { Model } from 'mongoose';
import { GradebookDocument } from './schema/gradebook.schema';
export declare class GradebookService {
    private tGradebookModel;
    constructor(tGradebookModel: Model<GradebookDocument>);
    getAll(class_id?: string, subject_id?: string, student_id?: string, semester?: number): Promise<any[]>;
    upsertScroce(class_id: string, subject_id: string, list_value: any, semester: any): Promise<import("mongodb").BulkWriteResult>;
}
