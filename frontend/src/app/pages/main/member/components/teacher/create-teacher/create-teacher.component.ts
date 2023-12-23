import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {
  
  constructor(
    private memberService: MemberService,
    private schoolLevelGrade: SchoolGradeLevelService,
    public dialogRef: MatDialogRef<CreateTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  conFig = new MemberModel;
  dataModel: any;
  error: any = [];
  option = {
    title: 'Thêm giáo viên mới',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Xác nhận'
  },
  ];
  listCreate = [];
  classId: number;
  gradeId: number;

  ngOnInit(): void {
    this.listCreate = this.conFig.createTeacher;
    this.getGrade();
  }

  getClassOfGrade(gradeid) {
    this.schoolLevelGrade.getClassOfGrade(gradeid).subscribe(res => {
      this.listCreate[5].data = res.map(x => {
        return {
          value: x._id,
          name: x.name
        }
      });
    })
  }
  getGrade() {
    this.schoolLevelGrade.getGrade('all').subscribe(res => {
      this.listCreate[4].data = res.map(x => {
        return {
          value: x.grade_key,
          name: x.name
        }
      }
      );
    })
  }
  callBackHandle(ev) {
    if (ev.type === 'select-data') {
      this.getClassOfGrade(ev.item.GradeId);
      this.dataModel = ev.item;
      console.log(this.dataModel);
    }
    else {
      this.dataModel = ev.item;
      console.log(this.dataModel);
    }
  }
  handleCallbackEvent(ev) {

    if (ev.btn.class === 'btn-cancel') {
      this.dialogRef.close(null);
    }
    if (ev.btn.class === 'btn-save') {
      console.log(ev.item);
      ev.item.Gender = +ev.item.Gender;
      ev.item.usertype = 2;
      this.memberService.createTeacher({
          email: ev.item.Email,
          class_id: ev.item.ClassId,
          full_name: ev.item.LastName,
          user_name: ev.item.UserName,
          gender: ev.item.Gender,
          phone: ev.item.Phone,
          dob: ev.item.DOB,
          address: ev.item.LocationAddress,
          parent_name: ev.item.LastName,
      }).subscribe(res => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm giáo viên thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dialogRef.close();
      }, (err) => {
        if(err.error.Ok === false){
          this.error = err.error.Message;
        }
        else{
          this.error = err.error.ModelState[""];
        }
      }, () => {

      }
      )
    }
  }
}
