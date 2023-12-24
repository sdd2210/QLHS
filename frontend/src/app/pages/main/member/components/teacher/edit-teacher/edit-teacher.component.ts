import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {

  constructor(
    private memberService: MemberService,
    private schoolLevelGrade: SchoolGradeLevelService,
    public dialogRef: MatDialogRef<EditTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  conFig = new MemberModel;
  dataModel: any = {};
  option = {
    title: 'Sửa giáo viên mới',
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


  ngOnInit(): void {
    this.data.Gender = this.data.account.gender;
    this.data.Email = this.data.account.email;
    this.data.ClassId = this.data.class._id;
    this.data.GradeId = this.data.class.grade_id;
    this.dataModel = this.data;
    this.listCreate = this.conFig.detailTeacher;
    this.listCreate[3].data = [
      {
        name: "Nam",
        value: 1
      },
      {
        name: "Nữ",
        value: 2
      }
    ];
    console.log(this.dataModel);

    this.getGrade(this.dataModel.class.grade_id);
    this.getClassOfGrade(this.data.class.grade_id);
  }
  getClassOfGrade(gradeid) {
    this.schoolLevelGrade.getClassOfGrade(undefined,undefined,undefined,gradeid).subscribe(res => {
      this.listCreate[5].data = res.map(x => {
        return {
          value: x._id,
          name: x.name
        }
      });
    })
  }
  getGrade(id) {
    this.schoolLevelGrade.getGrade(undefined).subscribe(res => {
      this.listCreate[4].data = res.map(
        x => {
          return {
            value: x._id,
            name: x.name
          }
        }
      );

    })
  }
  callBackHandle(ev) {
    if (ev.type === 'select-data') {
      this.getClassOfGrade(+ev.value);
    }
  }
  handleCallbackEvent(ev) {
    if (ev.btn.class === 'btn-cancel') {
      this.dialogRef.close(null);
    }
    if (ev.btn.class === 'btn-save') {
        ev.item.Gender = +ev.item.Gender,
        ev.item.ClassId = +ev.item.ClassId,
        ev.item.GradeId = +ev.item.GradeId,
        this.memberService.editTeacher(ev.item.TeacherId, ev.item).subscribe(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sửa giáo viên thành công!',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        })
    }
  }
}
