import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolGradeLevelService {

  constructor(private http: HttpClient) { }
  getListLevel(){
    return this.http.get('api/SchoolLevel').pipe(map((res: any) => res));
  }
  getListLevelPrivilege(){
    return this.http.get('level/statics').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeMenu(){
    return this.http.get('api/SchoolLevel/URL?URL=api/DishMenu ').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeTimeTable(){
    return this.http.get('api/SchoolLevel/URL?URL=api/TimeTableLesson ').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeNoti(){
    return this.http.get('api/SchoolLevel/URL?URL=api/annoucement ').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeNews(){
    return this.http.get('api/SchoolLevel/URL?URL=api/news  ').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeHomework(){
    return this.http.get('api/SchoolLevel/URL?URL=api/homework ').pipe(map((res: any) => res));
  }
  getListLevelPrivilegeAbsence(){
    return this.http.get('api/SchoolLevel/URL?URL=api/StudentAbsenceRequest  ').pipe(map((res: any) => res));
  }
  getGradeOfLevel(level: number){
    return this.http.post(`level/getkey/${level}`,{}).pipe(map((res: any) => res));
  }

  getGradeStatic(){
    return this.http.get(`grade/statics`).pipe(map((res: any) => res));
  }

  getGradeOfGradeKey(grade: number){
    return this.http.post(`level/getgrade/${grade}`,{}).pipe(map((res: any) => res));
  }

  getClassOfGrade(grade_key: string, user_id?: string, searchstring?: any){
    return this.http.post(`class/list_all`,{grade_key: grade_key, user_id, searchstring}).pipe(map((res: any) => res));
  }

  getSubjectOfGrade(grade_key: string){
    return this.http.post(`subject/list_all`,{grade_key: grade_key}).pipe(map((res: any) => res));
  }

  getListTest(){
    return this.http.post(`test/list_all`,{}).pipe(map((res: any) => res));
  }

  getClassStatic(){
    return this.http.get(`class/statics`).pipe(map((res: any) => res));
  }

  getGrade(grade_key: string){
    return this.http.post(`grade/list_all`,{level_id: grade_key}).pipe(map((res: any) => res));
  }
  getClassById(id: string){
    return this.http.post(`class/${id}`,{}).pipe(map((res: any) => res));
  }
  getAllClass(){
    return this.http.get('api/class/all').pipe(map((res: any) => res));
  }
  createClass(data){
    return this.http.post('class/create', data).pipe(map((res: any) => res));
  }
  deleteClass(classId){
    return this.http.post(`class/delete/${classId}`,{}).pipe(map((res: any) => res));
  }
  getUserGroup(){
    return this.http.get(`api/userGroup`).pipe(map((res: any) => res));
  }
  getEmployeeStatic(){
    return this.http.get(`auth/statics`).pipe(map((res: any) => res));
  }
}
