import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getListEmployee(keyword) {
        return this.http.post(`employee/getAll`,{}).pipe(map((res: any) => res));
    }
    getEmployeeBySubject(subject_id){
        return this.http.post(`employee/getAll`,{subject_id}).pipe(map((res: any) => res));
    }
    createEmployee(body) {
        return this.http.post('employee/add_new', body).pipe(map((res: any) => res));
    }
    createManyEmployee(body) {
        return this.http.post('employee/add_many', body).pipe(map((res: any) => res));
    }
    editEmployee(studentId: any, data: any) {
        return this.http.post(`employee/edit/${studentId}`, data).pipe(map((res: any) => res));
    }
    deleteEmployee(UserprofileId) {
        return this.http.post(`employee/delete/${UserprofileId}`,{id: UserprofileId}).pipe(map((res: any) => res));
    }
    assignPositionForEmployee(body){
        return this.http.post('api/userprofile/assignRole', body).pipe(map((res: any) => res));
    }

}
