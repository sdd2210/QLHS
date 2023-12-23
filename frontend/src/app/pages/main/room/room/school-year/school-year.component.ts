import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SettingModel } from 'src/app/models/setting.model';
import { FormatDateService } from 'src/app/services/format-date.service';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
import Swal from 'sweetalert2';
import { SchoolYearCreateComponent } from './school-year-create/school-year-create.component';
import { SchoolYearEditComponent } from './school-year-edit/school-year-edit.component';

@Component({
  selector: 'app-school-year',
  templateUrl: './school-year.component.html',
  styleUrls: ['./school-year.component.scss'] 
})
export class SchoolYearComponent implements OnInit {
  config = new SettingModel;
  listActive = [];
  tableData;
  data = [];
  constructor(
     private router: Router,
     private dialog: MatDialog,
     private schoolYearService: SchoolYearService,
     private formatDate: FormatDateService
  ) { }

  ngOnInit(): void {
    this.listActive = this.config.btnActice; 
    this.tableData = this.config.collumsSchoolYear;
    this.getSchoolYear();
  }

  getSchoolYear(){
     this.schoolYearService.getSchoolYear().subscribe(res => {
        this.data = res.original;
        this.data.map((x, index)=> {
          x.Name = x.name;
          x.Semester1 = this.formatDate.formatDate(x.semester[0].start_date, "DD/MM/YYYY") + " - " + this.formatDate.formatDate(x.semester[0].end_date, "DD/MM/YYYY"),
          x.Semester2 = this.formatDate.formatDate(x.semester[1].start_date, "DD/MM/YYYY") + " - " + this.formatDate.formatDate(x.semester[1].end_date, "DD/MM/YYYY")
          x.stt = index + 1;
          return x;
        });
        
     });
  }

  handleTableCallback(ev){
    console.log(ev);
    
    if (ev.type === 'create') {
      return this.dialog.open(SchoolYearCreateComponent, {
        width: '600px',
        height: '400px'
      }).afterClosed().subscribe(result => {
        this.getSchoolYear();
      })
    }
    if (ev.type === 'edit') {
      return this.dialog.open(SchoolYearEditComponent, {
        width: '600px',
        height: '400px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getSchoolYear();
      })
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
            this.schoolYearService.deleteSchoolYear(ev.item[index].SchoolYearId).subscribe(res => {
              this.getSchoolYear();
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
          this.schoolYearService.deleteSchoolYear(ev.item.SchoolYearId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getSchoolYear();
          })
        }
      })
    }
  }

}
