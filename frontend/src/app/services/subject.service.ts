import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    constructor(private http: HttpClient) { }
    getListSubjectOfGrade(gradeId) {
        return this.http.post(`subject/list_all`,{grade_key: gradeId}).pipe(map((res: any) => res));
    }
    getListSubjectCommon() {
        return this.http.get(`subject/common`).pipe(map((res: any) => res));
    }
    createSubject(body) {
        return this.http.post('subject/addnew', body).pipe(map((res: any) => res));
    }
    editSubject(SubjectId, body) {
        return this.http.post(`subject/edit/${SubjectId}`, body).pipe(map((res: any) => res));
    }
    deleteSubject(SubjectId){
        return this.http.post(`subject/delete/${SubjectId}`,{}).pipe(map((res: any) => res));
    }
}
