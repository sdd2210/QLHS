import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { News } from 'src/app/models/news.model';
import { CreateMemberComponent } from '../create-member/create-member.component';
import { EditMemberComponent } from '../edit-member/edit-member.component';
import * as XLSX from 'xlsx';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import { ImportStudentComponent } from '../import-student/import-student.component';
import * as moment from 'moment';
import { ExportFileExcelService } from 'src/app/services/export-file-excel.service';
@Component({
  selector: 'app-member-list-table',
  templateUrl: './member-list-table.component.html',
  styleUrls: ['./member-list-table.component.scss']
})
export class MemberDetailComponent implements OnInit {

  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [];
  file: File;
  arrayBuffer;
  dataImport: any[];
  classId: string;
  gradeId;
  listStudentError: any = [];
  user = JSON.parse(localStorage.getItem('access_user'));
  constructor(
    private dialog: MatDialog,
    private activeRouter: ActivatedRoute,
    private memberService: MemberService,
    private exportService: ExportFileExcelService,
    private schoolGradeLevel: SchoolGradeLevelService,
    private formatDate: FormatDateService
  ) { }
  classDetail;
  ngOnInit(): void {
    this.classId = this.activeRouter.snapshot.params.classId;
    this.getListStudentOfClass();
    this.tableData = this.config.collums;
    if(this.user.role_key == 'ADMIN' || this.user.role_key == 'TEACHER')
    {
      this.listActive = this.config.btnActice;
    }else{
      this.tableData = this.tableData.filter(x=>x.id !== 'UserName' && x.id !== 'checkbox' && x.type !== 'setting')
    }
    this.schoolGradeLevel.getClassById(this.classId).subscribe(res => {
      this.classDetail = res;
    })
  }
  getListStudentOfClass() {
    this.memberService.getListStudentClass(this.classId).subscribe(res => {
      if (res !== null) {
        this.data = res.original;
        this.data.forEach((x, index) => {
          x.GenderString = x.account.gender == 1? 'Nam': 'Nữ';
          x.ClassName = x.class.name;
          x.StudentCode = x.student_code;
          if(this.user.role_key == 'ADMIN' || this.user.role_key == 'TEACHER')
          {
            x.UserName = x.account.user_name;
          }
          x.LocationAddress = x.address;
          x.LastName = x.account.full_name;
          x.DOB = x.account.birth_day ? this.formatDate.formatDate(x.account.birth_day, 'YYYY-MM-DD') : null;
          x.stt = index + 1;
        });
      }

    })
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

  exportErrorStudentExcel(listStudentError) {
    this.exportService.exportExcel(listStudentError, "danh sach hoc sinh loi import");
  }

  handleDataImport(data) {
    let listStudent = data.map(x => {
      return {
        class_id: this.classId,
        // parent_name: ev.item.LastName,
        full_name: x['Họ và tên'],
        email: x['Email'],
        user_name: x['Tên đăng nhập'],
        gender: x['Giới tính'] == 'Nam' ? 1 : 2,
        phone: x['SĐT'],
        dob: moment(x['Ngày sinh'], 'DD/MM/YYYY').format('YYYY-MM-DD'),
        address: x['Địa chỉ'],
      }
    })
    this.memberService.createManyStudent(listStudent).subscribe();
    // this.createStudentImport(listStudent);
  }
  async createStudentImport(listStudent) {
    this.listStudentError = [];
    for (let i = 0; i < listStudent.length; i++) {
      let element = listStudent[i];
      this.memberService.createStudent(element).subscribe(res => { }, (err) => {
        this.getListStudentOfClass();
        this.listStudentError.push(element);
        if (i === listStudent.length - 1) {
          Swal.fire({
            title: 'Số điện thoại phụ huynh bị trùng, vui lòng kiểm tra lại!',
            icon: 'info',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: "Tải xuống danh sách học sinh bị trùng",
            cancelButtonText: "Hủy",
          }).then(async (result) => {
            if (result.isConfirmed) {
              this.listStudentError = this.listStudentError.map(x => {
                return {
                  "Họ và tên": x.StudentLastName,
                  "Tên đăng nhập": x.Phone,
                  "Ngày sinh": x.DOB,
                  "Giới tính": x.StudentGender === 1 ? "Nam" : "Nữ",
                  "Mã học sinh": x.StudentCode,
                  "Địa chỉ": x.StudentLocationAddress,
                  "SĐT học sinh": x.StudentPhone,
                  "Lớp": x.ClassName
                };
              })
              this.exportErrorStudentExcel(this.listStudentError);
            }
          })
        }
      }, () => {
        if(i === listStudent.length - 1){
          this.getListStudentOfClass();
        }

      });
    }
  }

  handleTableCallback(ev) {
    if (ev.type === 'create') {
      return this.dialog.open(CreateMemberComponent, {
        width: '500px',
        height: '750px',
        disableClose: true,
        data: this.classDetail,

      }).afterClosed().subscribe(result => {
        this.getListStudentOfClass();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(EditMemberComponent, {
        width: '500px',
        height: '750px',
        disableClose: true,
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListStudentOfClass();
      });
    }
    if (ev.type === 'upload-file') {
      return this.dialog.open(ImportStudentComponent, {
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
        text: "Bạn muốn xoá học sinh này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then(async (result) => {
        if (result.isConfirmed) {
          for (let i = 0; i < ev.item.length; i++) {
            const respone = await this.memberService.deleteAllStudent(ev.item[i].StudentId);
            if (respone.Message === "Success") {
              this.getListStudentOfClass();
            }
          }
          await Swal.fire({
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
        text: "Bạn muốn xoá học sinh này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.memberService.deleteStudent(ev.item._id).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá học sinh thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListStudentOfClass();
          })
        }
      })
    }
  }
}
