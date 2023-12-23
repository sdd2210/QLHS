import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { CreateMemberComponent } from '../create-member/create-member.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private memberService: MemberService,
    private employeeService: EmployeeService
  ) { }
  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [
  ];

  ngOnInit(): void {
    this.tableData = this.config.collumsTeacher;
    this.listActive = this.config.btnActiceTeacher;
    this.getListTeacher();
  }

  getListTeacher() {
    this.memberService.getTeacher().subscribe(res => {
      if (res !== null) {
        this.data = res.original;
        this.data.map((x, ix) => {
          x.ClassName = x.class.name;
          x.GenderString = (x.account.gender == 1) ? 'Nam' : 'Nữ';
          x.LastName = x.account.full_name;
          x.LocationAddress = x.address;
          x.DOB = x.account.dob;
          x.Phone = x.account.user_name;
          x.stt = ix + 1
        });
      }
      console.log(res);
      
    })
  }
  handleTableCallback(ev) {
    if (ev.type === 'create') {
      return this.dialog.open(CreateTeacherComponent, {
        width: '500px',
        height: '750px',
      }).afterClosed().subscribe(result => {
        this.getListTeacher();
      });
    }

    if (ev.type === 'edit') {
      return this.dialog.open(EditTeacherComponent, {
        width: '500px',
        height: '750px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListTeacher();
      });
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá giáo viên này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.employeeService.deleteEmployee(ev.item.UserprofileId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListTeacher();
          })
        }
      })
    }
  }
}
