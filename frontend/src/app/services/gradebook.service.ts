import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GradebookService {

    constructor(private http: HttpClient) { }

    getListGradebookByQuery(class_id, subject_id, student_id, semester) {
        return this.http.post(`gradebook/list_by_class`,{class_id, subject_id, student_id, semester}).pipe(map((res: any) => res));
    }
    
    createGradeBook(class_id, subject_id, list_value, semester){
        return this.http.post(`gradebook/update`,{class_id, subject_id, list_value, semester}).pipe(map((res: any) => res));
    }

}
