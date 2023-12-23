import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ExportFileExcelService } from 'src/app/services/export-file-excel.service';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import Swal from 'sweetalert2';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { SubjectService } from 'src/app/services/subject.service';
import { CreateScheduleComponent } from '../create-schedule/create-schedule.component';
import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private exportService: ExportFileExcelService,
    private router: ActivatedRoute,
    private scheduleService: ScheduleService,
    private formatDate: FormatDateService,
    private schoolGradeLevel: SchoolGradeLevelService,
    private subjectService: SubjectService,
    private memberService: MemberService,
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  arrayBuffer: any;
  file: File;
  dataImport: any = [];
  dataSchedule = [];
  dataRoom = [];
  dataExport = [];
  classId: string;
  today; string;
  model = {};
  gradeId: string;
  detailClass: any;
  modelEdit: any = [];
  listSubject: any[];
  listTeacherOfSubject: any = [];
  currentSemester: any;
  schoolYear = new Date().getFullYear();
  error: any;
  listPrivilege: any = [];
  checkPrivilege: any;
  ngOnInit(): void {
    window.onbeforeunload = function () {
      return 'Are you sure you want to leave?';
    };
    this.listPrivilege = JSON.parse(localStorage.getItem('privilege_list'));
    let check = this.listPrivilege.find(x => x.Method === "POST" && x.URL === "api/TimeTableLesson" || x.Method === "PUT" && x.URL === "api/TimeTableLesson");
    if (check) {
      this.checkPrivilege = true;
    }
    else {
      this.checkPrivilege = false;
    }

    this.checkPrivilege = true;

    this.classId = this.router.snapshot.params.classId;
    // this.gradeId = this.router.snapshot.params.gradeId;
    this.today = this.formatDate.formatDate(new Date(), 'YYYY-MM-DD');
    this.schoolGradeLevel.getClassById(this.classId).subscribe(res => {
      this.detailClass = res;
      this.gradeId = res.grade_id;
    })
    this.getTimeTable(this.today);
    this.getListSubject();
    this.getSemester();
  }
  getSemester() {
    this.scheduleService.getListSemester().subscribe(res => {
      this.currentSemester = {
        year : new Date(res.start_date).getFullYear(),
        startTime : new Date(res.start_date).getTime(),
        endTime : new Date(res.end_date).getTime(),
        start : this.formatDate.formatDate(res.end_date, 'DD/MM/YYYY'),
        end : this.formatDate.formatDate(res.end_date, 'DD/MM/YYYY'),
      }
    })
  }

  getTimeTable(today) {
    
    this.scheduleService.getListLesson().subscribe(res=>{
      this.dataSchedule = res.map(x => ({
        name: x.Name, lesson_id: x._id, list_subject: [
          {}, {}, {}, {}, {}, {},
        ]
      }));
    });
    this.memberService.getAllRoom().subscribe((dt)=>{
      this.dataRoom = dt.map(x=>({
        value: x._id,
        name: x.name,
      }))
    });
    this.scheduleService.getScheduleOfClass(this.classId, today).subscribe(res => {
      this.dataSchedule = this.dataSchedule.map(x=>{
        const found = res.find(o=>x.lesson_id == o.list_lesson.lesson_id);
        if(found){
          x.list_subject = found.list_lesson.list_subject.map(o=>{
            const found_room = this.dataRoom.find(k=>k.value == o.room_id);
            const found_subject = found.subjects.find(k=>k._id == o.subject_id);
            const found_techear = found.employee.find(k=>k._id == o.teacher_id);
            if(found_subject){
              o.subject_name = found_subject.name
            }
            if(found_techear){
              o.TeacherName = found_techear.account.full_name
            }
            if(found_room){
              o.RoomName = found_room.name
            }
            return o;
          });
        }
        return x;
      })
      console.log(this.dataSchedule)
    });
  }
  incomingfile(event, item) {
    let fileReader = new FileReader();
    if (event) {
      this.file = event.target.files[0];
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        this.dataExport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        console.log(this.dataImport);
        const check = this.dataImport.findIndex(x => x['Tiết'] === 1);
        if (check < 0) {
          Swal.fire({
            title: 'Upload file không đúng, vui lòng chọn lại file tương ứng!',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok',
          }).then((result) => {

          })
        }
        else {
          this.handleData(this.dataImport, item);
        }
      }
      fileReader.readAsArrayBuffer(this.file);
    }
  }
  handleData(data, item) {
    this.dataExport = data;
    let dataSchedule = data.map(x => {
      return {
        "LessonId": x['Tiết'],
        "ListSubjects": [
          {
            "DayValue": 1,
            "SubjectName": x['Thứ 2'] || null,
            "TeacherName": x['__EMPTY_1'] || null,
            "RoomName": x['__EMPTY'] || null
          },
          {
            "DayValue": 2,
            "SubjectName": x['Thứ 3'] || null,
            "TeacherName": x['__EMPTY_3'] || null,
            "RoomName": x['__EMPTY_2'] || null
          },
          {

            "DayValue": 3,
            "SubjectName": x['Thứ 4'] || null,
            "TeacherName": x['__EMPTY_5'] || null,
            "RoomName": x['__EMPTY_4'] || null
          },
          {

            "DayValue": 4,
            "SubjectName": x['Thứ 5'] || null,
            "TeacherName": x['__EMPTY_7'] || null,
            "RoomName": x['__EMPTY_6'] || null
          },
          {

            "DayValue": 5,
            "SubjectName": x['Thứ 6'] || null,
            "TeacherName": x['__EMPTY_9'] || null,
            "RoomName": x['__EMPTY_8'] || null
          },
          {

            "DayValue": 6,
            "SubjectName": x['Thứ 7'] || null,
            "TeacherName": x['__EMPTY_11'] || null,
            "RoomName": x['__EMPTY_10'] || null
          }
        ]
      }
    })
    this.model = {
      "ClassId": this.classId,
      "StartDate": item.date,
      "LessonList": dataSchedule,
      "CreatedOn": this.formatDate.formatDate(Date.now(), "YYYY-MM-DD") + "T" + this.formatDate.formatDate(Date.now(), "hh:mm:ss")
    }
    const date = new Date(item.date).getTime();
    if (date >= this.currentSemester[0].startTime && date <= this.currentSemester[0].endTime || date >= this.currentSemester[1].startTime && date <= this.currentSemester[1].endTime) {
      this.scheduleService.uploadTimeTableLesson(this.model).subscribe(res => {
        if (res.Ok) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.Message,
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          Swal.fire({
            title: res.Message,
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok',
          }).then((result) => {

          })
        }
        this.today = item.date;
        this.getTimeTable(this.today);
        console.log(res);

      }, (err) => {

      }, () => {
      })
    }
    else {
      this.getTimeTable(this.today);
      Swal.fire({
        title: 'Vui lòng chọn lại ngày áp dụng!',
        text: `
             Học kì 1 từ ${this.currentSemester[0].start} => ${this.currentSemester[0].end}
             &&
             Học kì 2 từ ${this.currentSemester[1].start} => ${this.currentSemester[1].end}
        `,

        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
      }).then((result) => {
      })
    }

  }
  getListSubject() {
    this.subjectService.getListSubjectOfGrade(this.gradeId).subscribe(res => {
      this.listSubject = res;
      console.log("subject", res);

    });
  }

  onChange(item, value) {
    console.log(item);
    item.SubjectTeacherId = null;
    item.TeacherName = "";
    let checkList = this.listSubject.find(x => x.SubjectId == value);
    if (checkList.SubjectName.toLowerCase() === 'chào cờ') {
      let model = [{
        "TimeTableLessonId": item.TimeTableLessonId,
        "SubjectId": checkList.SubjectId,
        "SubjectTeacherId": "",
        "UpdatedOn": this.formatDate.formatDate(Date.now(), "YYYY-MM-DD") + "T" + this.formatDate.formatDate(Date.now(), "hh:mm:ss")
      }];
      this.scheduleService.editMultiTimeTable(model).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thời khoá biểu thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.modelEdit.forEach(x => {
          x.checkTeacher = false,
            x.checkSubject = false,
            x.checkSelectSubject = false
        });
      }, (err) => {
        Swal.fire({
          title: err.error.Message,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        }).then((result) => {

        })
      }, () => {
      })
    }
    this.listTeacherOfSubject = this.listSubject.find(x => x.SubjectId == value).ListTeachers;
    item.ListTeachers = this.listTeacherOfSubject;
    console.log(item, value);
    item.SubjectId = +value;
    // item.checkSelectSubject = true;
  }
  subjectTeacher(item, value) {
    console.log(item, value);
    item.SubjectTeacherId = +value;
    let model = [{
      "TimeTableLessonId": item.TimeTableLessonId,
      "SubjectTeacherId": item.SubjectTeacherId,
      "RoomName": item.RoomName,
      "SubjectId": item.SubjectId,
      "UpdatedOn": this.formatDate.formatDate(Date.now(), "YYYY-MM-DD") + "T" + this.formatDate.formatDate(Date.now(), "hh:mm:ss")
    }];
    this.scheduleService.editMultiTimeTable(model).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cập nhật thời khoá biểu thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.modelEdit.forEach(x => {
        x.checkTeacher = false,
          x.checkSubject = false,
          x.checkSelectSubject = false
      });
    }, (err) => {
      Swal.fire({
        title: err.error.Message,
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
      }).then((result) => {

      })
    }, () => {
    })
  }

  addLesson(lesson_id, index) {
    const current_semester = JSON.parse(localStorage.getItem('current_semester'))
    return this.dialog.open(CreateScheduleComponent, {
      width: '800px',
      // height: '400px',
      disableClose: true,
      data:{lesson_id, index, gradeId: this.gradeId, current_semester}
    }).afterClosed().subscribe(result => {
      if (result) {
        // console.log(result.item);
        this.scheduleService.addLessonTimeTable({
          employee_id: result.item.EmployeeId,
          room_id: result.item.RoomId,
          start_date: result.item.date,
          end_date: current_semester.semester.end_date,
          class_id: this.classId,
          ...result.item,
        }).subscribe(x=>{
          this.dataSchedule = x;
        })
        // this.incomingfile(result.file, result.item);
      }
    });
  }

  edit(lesson_id, index, item){
    return this.dialog.open(CreateScheduleComponent, {
      width: '800px',
      // height: '400px',
      disableClose: true,
      data:{lesson_id, index, gradeId: this.gradeId, ...item, type: 'edit'}
    }).afterClosed().subscribe(result => {
      if (result) {
        this.scheduleService.addLessonTimeTable({
          employee_id: result.item.Employee,
          class_id: this.classId,
          ...result.item,
        }).subscribe(x=>{
          this.dataSchedule = x;
        })
        // this.incomingfile(result.file, result.item);
      }
    });
  }

  buttonSaveChange() {
    this.modelEdit.length = 0;
    this.dataSchedule.forEach(x => {
      if (x.ListSubjects !== null) {
        x.ListSubjects.forEach(i => {
          if (i.checkTeacher === true || i.checkSubject === true || i.checkSelectSubject === true)
            this.modelEdit.push(i);
        });
      }
    });
    this.modelEdit = this.modelEdit.map(x => {
      return {
        TimeTableLessonId: x.TimeTableLessonId,
        RoomName: x.RoomName,
      }
    })
    if (this.modelEdit.length !== 0) {
      this.scheduleService.editMultiTimeTable(this.modelEdit).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thời khoá biểu thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dataSchedule.forEach(x => {
          if (x.ListSubjects !== null) {
            x.ListSubjects.forEach(i => {
              i.checkSubject = false
            });
          }
        });
      }, (err) => {
        console.log();
        Swal.fire({
          title: err.error.Message,
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        }).then((result) => {

        })
      }, () => {

      })
    }
  }
  upload() {
    return this.dialog.open(ImportScheduleComponent, {
      width: '800px',
      height: '400px',
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result) {
        this.incomingfile(result.file, result.item);
      }
    });
  }
  exportExcel(data, fileName) {
    this.exportService.exportExcel(data, fileName);
  }

}
