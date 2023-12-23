import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormatDateService } from 'src/app/services/format-date.service';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-school-year-edit',
  templateUrl: './school-year-edit.component.html',
  styleUrls: ['./school-year-edit.component.scss']
})
export class SchoolYearEditComponent implements OnInit {


  constructor(
    private schoolYearService: SchoolYearService,
    public dialogRef: MatDialogRef<SchoolYearEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private formatDate: FormatDateService
  ) { }
  model: any = {};
  ngOnInit(): void {
    this.model = this.data;
    this.model.FirstEndDate = this.formatDate.formatDate(this.data.FirstEndDate, "YYYY-MM-DD");
    this.model.FirstStartDate = this.formatDate.formatDate(this.data.FirstStartDate, "YYYY-MM-DD");
    this.model.SecondEndDate = this.formatDate.formatDate(this.data.SecondEndDate, "YYYY-MM-DD");
    this.model.SecondStartDate = this.formatDate.formatDate(this.data.SecondStartDate, "YYYY-MM-DD");
  }
  closeDialog() {
    this.dialogRef.close();
  }
  save() {
    this.schoolYearService.editSchoolYear(this.data.SchoolYearId, this.model).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sửa thành công!',
        showConfirmButton: false,
        timer: 1500
      });
      this.closeDialog();
    })
  }
}
