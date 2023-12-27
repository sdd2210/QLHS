import { Model } from 'mongoose';
import { LessonDocument } from './schema/lesson.schema';
export declare class LessonService {
    private tLessonModel;
    constructor(tLessonModel: Model<LessonDocument>);
    multiSearch(array: string[], searchstring: string): {}[];
    getAll(searchstring?: string, class_id?: string, status?: string, rowsPerpage?: number, currentPage?: number): Promise<any[]>;
    createLesson(body: any): Promise<boolean>;
}
