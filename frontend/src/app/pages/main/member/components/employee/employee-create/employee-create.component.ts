import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RoleService } from 'src/app/services/role.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmployeeCreateComponent>,
    private employeeService: EmployeeService,
    private roleService: RoleService,
    private schoolLevelGrade: SchoolGradeLevelService,
  ) { }
  conFig = new MemberModel;
  dataModel = {};
  checkFile = {};
  error: any = [];
  option = {
    title: 'THÊM THÀNH VIÊN MỚI',
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
    this.listCreate = this.conFig.createEmployee;
    this.listCreate[5].data = [
      {
        name: "Nam",
        value: 1
      },
      {
        name: "Nữ",
        value: 2
      }
    ];
    this.schoolLevelGrade.getGrade(undefined).subscribe(res => {
      let listRole = res.map(x => {
        return {
            name: x.name,
            value: x._id
        }
      })
      this.listCreate[6].data = listRole;
      
    })
  }
  getClassOfGrade(gradeid) {
    this.schoolLevelGrade.getSubjectOfGrade(gradeid).subscribe(res => {
      this.listCreate[7].data = res.map(x => {
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
    if (ev.btn.class === 'btn-save') {
      console.log(ev.item);
      this.employeeService.createEmployee({
        full_name: ev.item.LastName,
        email: ev.item.Email,
        user_name: ev.item.UserName,
        gender: Number(ev.item.Gender),
        phone: ev.item.Phone,
        subject_id: ev.item.SubjectId,
        dob: ev.item.DOB,
        role_key: 'TEACHER2',
        address: ev.item.LocationAddress,
      }).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm mới thành công!',
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
          timer: 1500
        })
       
      })
    }
    else{
      this.dialogRef.close();
    }

  }

}
