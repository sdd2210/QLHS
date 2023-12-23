import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { FormatDateService } from 'src/app/services/format-date.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmployeeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private employeeService: EmployeeService,
    private schoolLevelGrade: SchoolGradeLevelService,
    private formatDateService: FormatDateService,
    private roleService: RoleService
  ) { }
  conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'SỬA THÔNG TIN THÀNH VIÊN',
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
  

  async ngOnInit(): Promise<void> {
    this.listCreate = this.conFig.editEmployee;
    this.dataModel = {
      LastName: this.data.account.full_name,
      UserName: this.data.account.user_name,
      ParentName: this.data.parent_name,
      DOB: this.formatDateService.formatDate(this.data.account.birth_day, 'YYYY-MM-DD') ,
      GradeId: this.data.grades._id,
      SubjectId: this.data.subjects._id,
      LocationAddress: this.data.address,
      Gender: this.data.account.gender,
    };
   
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
    // console.log(this.listCreate);
    this.schoolLevelGrade.getGrade(undefined).subscribe(res => {
      let listRole = res.map(x => {
        return {
            name: x.name,
            value: x._id
        }
      })
      // this.listCreate[6].defaultValue = this
      this.listCreate[4].data = listRole;
    })
    this.getClassOfGrade(this.data.grades._id);
  }
  getClassOfGrade(gradeid) {
    this.schoolLevelGrade.getSubjectOfGrade(gradeid).subscribe(res => {
      this.listCreate[5].data = res.map(x => {
        return {
          value: x._id,
          name: x.name
        }
      });
    })
  }
  callBackHandle(ev) {
    if (ev.type === 'select-data') {
      console.log(ev.item);
      this.getClassOfGrade(ev.item.GradeId);
      this.dataModel = ev.item;
    }
    else {
      this.dataModel = ev.item;
      console.log(this.dataModel);
    }
  }

  handleCallbackEvent(ev) {
    if (ev.btn.class === "btn-save") {
      const subject_id = ev.item.SubjectId;
      // ev.item.RoleId = +ev.item.RoleId;
      ev.item.Gender = +ev.item.Gender;
      this.employeeService.editEmployee(
        this.data._id, {
          account_id: this.data.account_id,
          email: ev.item.Email,
          full_name: ev.item.LastName,
          user_name: ev.item.UserName,
          gender: ev.item.Gender,
          phone: ev.item.Phone,
          dob: ev.item.DOB,
          address: ev.item.LocationAddress,
          subject_id
        }
      ).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sửa thông thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dialogRef.close();
      }, (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 1500,
        });
        this.dialogRef.close();
      }
      )
    }
    else{
      this.dialogRef.close();
    }
  }

}
