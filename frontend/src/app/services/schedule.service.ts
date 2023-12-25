import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  getScheduleOfClass(classId, current_date){
    return this.http.post(`timetable/getbyClass`,{class_id: classId, current_date}).pipe(map((res: any) => res));

  }
  getScheduleOfTeacher(classId, current_date){
    return this.http.post(`timetable/getbyEmployee`,{employee_id: classId, current_date}).pipe(map((res: any) => res));

  }
  uploadTimeTableLesson(data){
    return this.http.post('api/TimeTableLesson/upload', data).pipe(map((res: any) => res));
  }
  editTimeTableLesson(timeTableLessonId, data){
    return this.http.put(`api/TimeTableLesson/${timeTableLessonId}`, data).pipe(map((res: any) => res.Payload));
  }
  getListSubject(){
    return this.http.get('api/subjects').pipe(map((res: any) => res.Payload));
  }
  editMultiTimeTable(data){
    return this.http.put('api/TimeTableLesson/bulkPut', data).pipe(map((res: any) => res.Payload));
  }
  getListSemester(){
    return this.http.get('schoolyear/current_semester').pipe(map((res: any) => res));

  }
  getListLesson(){
    return this.http.post('lesson/getAll',{}).pipe(map((res: any) => res));

  }

  addLessonTimeTable(data){
    return this.http.post('timetable/add_new',data).pipe(map((res: any) => res));

  }
}
