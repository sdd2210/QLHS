import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    constructor(private http: HttpClient) { }
    getListRole() {
        return this.http.get('auth/allrole').pipe(map((res: any) => res));
    }
    createRole(body) {
        return this.http.post('api/role', body).pipe(map((res: any) => res));
    }
    editRole(RoleId, body) {
        return this.http.put(`api/role/${RoleId}`, body).pipe(map((res: any) => res));
    }
    listRoleSchoolOfStudent(roleId) {
        return this.http.get(`api/RoleSchoolLevelPrivilege/SchoolLevel?RoleId=${roleId}`).pipe(map((res: any) => res.Payload));
    }
    listRoleSchool(roleId) {
        return this.http.get(`api/RoleSchoolLevelPrivilege?RoleId=${roleId}`).pipe(map((res: any) => res.Payload));
    }

    getListEmployeeOfRole(RoleId) {
        return this.http.get(`api/userprofile/role/${RoleId}`).pipe(map((res: any) => res.Payload));
    }
    assignRoleForEmployee(body) {
        return this.http.post('api/userprofile/assignRole', body).pipe(map((res: any) => res));
    }
    assignPrivilegeForPosition(body){
        return this.http.post('api/RoleSchoolLevelPrivilege', body).pipe(map((res: any) => res));
    }
    deleteRole(roleId){
        return this.http.delete(`api/Role/${roleId}`).pipe(map((res: any) => res));
    }
}
