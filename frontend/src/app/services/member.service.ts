import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) { }
  getListStudentClass(classId: any) {
    return this.http.post(`student/getAll`,{class_id: classId}).pipe(map((res: any) => res));
  }

  updateInfor( data: any) {
    return this.http.post(`auth/update_infor`, data).pipe(map((res: any) => res));
  }

  getListStudent(keyword: any) {
    return this.http.post(`student/getAll`,{searchstring: keyword, class_id: 'all'});
  }

  getAllStudent(){
    return this.http.get('api/student/class').pipe(map((res: any) => res));
  }
  createStudent(data: any) {
    return this.http.post('student/add_new', data).pipe(map((res: any) => res));
  }
  createRoom(data: any) {
    return this.http.post('room/add_new', data).pipe(map((res: any) => res));
  }
  getAllRoom(keyword? : any) {
    return this.http.post('room/list_all', {searchstring: keyword}).pipe(map((res: any) => res));
  }
  deleteRoom(id? : any) {
    return this.http.post('room/delete', {id}).pipe(map((res: any) => res));
  }
  createManyStudent(data: any) {
    return this.http.post('student/add_many', data).pipe(map((res: any) => res));
  }
  createTeacher(data: any) {
    return this.http.post('teacher/add_new_homeroom', data).pipe(map((res: any) => res));
  }
  editStudent(studentId: any, data: any) {
    return this.http.post(`student/edit/${studentId}`, data).pipe(map((res: any) => res));
  }
  
  deleteStudent(studentId: any) {
    return this.http.post(`student/delete/${studentId}`,{}).pipe(map((res: any) => res));
  }
  deleteAllStudent(studentId: any){
    return this.http.delete(`api/student/${studentId}`).toPromise().then((result) => JSON.parse(JSON.stringify(result)));;
  }
  createStudentImport(data: any) {
    return this.http.post('api/Account/RegisterParentWithStudent', data).toPromise().then((result) => JSON.parse(JSON.stringify(result)));
  }
  getTeacher(){
    return this.http.post(`teacher/getAll`,{class_id: 'all'}).pipe(map((res: any) => res));
  }
  editTeacher(teacherId: any, data: any){
    return this.http.put(`api/teacher/${teacherId}`, data).pipe(map((res: any) => res));
  }
  deleteTeacher(teacherId: any) {
    return this.http.delete(`api/teacher/${teacherId}`).pipe(map((res: any) => res));
  }
  
  searchMember(studentId: any, keyword: any){
    return this.http.get(`api/student?StudentId=${studentId}&keyword=${keyword}`).pipe(map((res: any) => res));
  }
  getTeacherUserName(){
    return this.http.post(`auth/infor_user`,{}).pipe(map((res: any) => res));
  }

  getInfor(){
    return this.http.get(`teacher/username`).pipe(map((res: any) => res));
  }

}

