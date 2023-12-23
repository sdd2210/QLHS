import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SchoolYearService {
    constructor(private http: HttpClient) { }
    getSchoolYear() {
        return this.http.post('schoolyear/list_all',{}).pipe(map((res: any) => res));
    }

    getCurrentSchoolYear() {
        return this.http.get('schoolyear/current_semester').pipe(map((res: any) => res));
    }

    createSchoolYear(body) {
        return this.http.post('schoolyear/addnew', body).pipe(map((res: any) => res));
    }
    editSchoolYear(SchoolYearId, body) {
        return this.http.put(`api/SchoolYear/${SchoolYearId}`, body).pipe(map((res: any) => res));
    }
    deleteSchoolYear(schoolYearId){
        return this.http.delete(`api/SchoolYear/${schoolYearId}`).pipe(map((res: any) => res));
    }
}
