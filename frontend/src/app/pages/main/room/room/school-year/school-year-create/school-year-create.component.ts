import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-school-year-create',
  templateUrl: './school-year-create.component.html',
  styleUrls: ['./school-year-create.component.scss']
})
export class SchoolYearCreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SchoolYearCreateComponent>,
    private schoolYearService: SchoolYearService
  ) { }
  model: any = {};
  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
  save() {
    this.schoolYearService.createSchoolYear(this.model).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới thành công!',
        showConfirmButton: false,
        timer: 1500
      });
      this.closeDialog();
    })
  }

}
