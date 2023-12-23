import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ScheduleModel } from 'src/app/models/schedule.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { MemberService } from 'src/app/services/member.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  constructor(
    private subjectService: SubjectService,
    private employeeService: EmployeeService,
    private scheduleService: ScheduleService,
    private memberService: MemberService,
    public dialoRef: MatDialogRef<CreateScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  conFig = new ScheduleModel;
  dataModel = {};
  checkFile = {
    // type: 'download',
    Url: 'assets/files/schedule.xlsx'
  }
  option = {
    title: 'Thêm tiết học mới',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Lưu'
  },
];
  listCreate = [];
  ngOnInit(): void {
      this.listCreate = this.conFig.createLesson;
      if(this.data.type == 'edit'){
        this.listCreate = this.conFig.editLesson;
        this.option = {
          title: 'Sửa tiết học',
          type: 'create'
        };
        this.dataModel={
          EmployeeId: this.data.teacher_id,
          SubjectId: this.data.subject_id,
        }
        this.subjectService.getListSubjectOfGrade(this.data.gradeId).subscribe((dt =>{
          this.listCreate[1].data = dt.map(x=>({
            value: x._id,
            name: x.name,
          }))
        }));

        this.employeeService.getEmployeeBySubject(this.data.subject_id).subscribe((dt)=>{
          this.listCreate[2].data = dt.original.map(x=>({
            value: x._id,
            name: x.account.full_name,
          }))
        });

        this.memberService.getAllRoom().subscribe((dt)=>{
          this.listCreate[3].data = dt.map(x=>({
            value: x._id,
            name: x.name,
          }))
        });
      }else{

        this.listCreate[4].option[this.data.index - 2].selected = true;
        this.dataModel={
          workday: this.listCreate[4]?.option,
          lesson: this.listCreate[5]?.option,
          EmployeeId: this.data.teacher_id,
          SubjectId: this.data.subject_id,
        }
        this.scheduleService.getListLesson().subscribe(res=>{
          const newOpt = res.map(x => {
            if(x._id == this.data.lesson_id){
              return {
                name: x.Name,
                value: x._id,
                selected: true
              }
            }
            return {
              name: x.Name,
              value: x._id,
              selected: false
            }
          });
          this.listCreate[5].option = newOpt;
          this.dataModel['lesson'] = this.listCreate[5].option;
        })
        this.memberService.getAllRoom().subscribe((dt)=>{
          this.listCreate[3].data = dt.map(x=>({
            value: x._id,
            name: x.name,
          }))
        });
        this.subjectService.getListSubjectOfGrade(this.data.gradeId).subscribe((dt =>{
          this.listCreate[1].data = dt.map(x=>({
            value: x._id,
            name: x.name,
          }))
        }));
      }
      
  }
  handleCallbackEvent(ev) {
      if(ev.btn.class === 'btn-cancel'){
        this.dialoRef.close(null);
      }
      else{
        this.dialoRef.close(ev)
      }
  }

  callBackHandle(ev) {
    console.log(ev.type);
    if (ev.type === 'select-data') {
      console.log(ev.item);
      this.employeeService.getEmployeeBySubject(ev.item.SubjectId).subscribe((dt)=>{
        this.listCreate[2].data = dt.original.map(x=>({
          value: x._id,
          name: x.account.full_name,
        }))
      });
      this.dataModel = ev.item;
    }
    else {
      this.dataModel = ev.item;
      console.log(this.dataModel);
    }
  }

  
}