import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ExportFileExcelService } from 'src/app/services/export-file-excel.service';
import { ImportEmployeeComponent } from './import-employee/import-employee.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  config = new MemberModel;
  listActive = [];
  tableData;
  data: any = [];
  dataModel = {};
  dataImport: any[];
  file: File;
  arrayBuffer;
  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private formatDate: FormatDateService,
    private exportService: ExportFileExcelService,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
      this.listActive = this.config.btnEmployee;
      this.tableData = this.config.collumsEmployee;
      this.getListEmployee();
  }

  incomingfile(event) {
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
        this.handleDataImport(this.dataImport);
      }
      fileReader.readAsArrayBuffer(this.file)
    }

  }

  handleDataImport(data) {
    let listEmployee = data.map(x => {
      return {
        // ClassId: this.classId,
        full_name: x['Họ và tên'],
        email: x['Email'],
        user_name: x['Tên đăng nhập'],
        gender: x['Giới tính'] == 'Nam' ? 1 : 2,
        phone: x['SĐT'],
        subject_key: this.profileService.regexVietnamese(`lop${x['Khối']}-${x['Môn học'].replace(' ','').replace(' ','').replace(' ','').replace(' ','')}`),
        grade_name: x['Khối'],
        dob: moment(x['Ngày sinh'], 'DD/MM/YYYY').format('YYYY-MM-DD'),
        role_key: 'TEACHER2',
        address: x['Địa chỉ'],
        // ClassName: this.classDetail?.Name,
      }
    })
    // console.log(listEmployee);
    this.employeeService.createManyEmployee(listEmployee).subscribe((res)=>{window.location.reload()});
  }
  
  getListEmployee(){
    this.employeeService.getListEmployee("").subscribe(res => {
      this.data = res.original;
      this.data.map((x, index) => {
        x.GenderString = x.account.gender == 1? 'Nam': 'Nữ';
        // x.RoleName = x.roles.role_name;
        x.SubjectName = x.subjects.name;
        x.GradeName = x.grades.name;
        x.StudentCode = x.student_code;
        x.UserName = x.account.user_name;
        x.LocationAddress = x.address;
        x.LastName = x.account.full_name;
        x.DOB = x.account.birth_day ? this.formatDate.formatDate(x.account.birth_day, 'DD-MM-YYYY') : null;
        x.stt = index + 1
      })
    })
  }

  handleTableCallback(ev){
    if (ev.type === 'create') {
      return this.dialog.open(EmployeeCreateComponent, {
        width: '500px',
        height: '750px',
      }).afterClosed().subscribe(result => {
        this.getListEmployee();
      });
    }
    
    if (ev.type === 'edit') {
      return this.dialog.open(EmployeeEditComponent, {
        width: '500px',
        height: '750px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListEmployee();
      });
    }

    if (ev.type === 'upload-file') {
      return this.dialog.open(ImportEmployeeComponent, {
        width: '500px',
        height: '300px',
        disableClose: true,
        data: ev.item
      }).afterClosed().subscribe(result => {
        if (result !== null) this.incomingfile(result.file);

      });
    }

    if (ev.type === 'delete-all') {
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          for (let index = 0; index < ev.item.length; index++) {
            this.employeeService.deleteEmployee(ev.item[index].UserprofileId).subscribe(res => {
              this.getListEmployee();
            })
          }
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xoá thành công!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.employeeService.deleteEmployee(ev.item._id).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListEmployee();
          })
        }
      })
    }


  }

}
     
