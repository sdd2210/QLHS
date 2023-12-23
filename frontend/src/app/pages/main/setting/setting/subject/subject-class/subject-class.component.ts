import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectModel } from 'src/app/models/subject.model';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';
import { SubjectCreateComponent } from '../subject-create/subject-create.component';
import { SubjectEditComponent } from '../subject-edit/subject-edit.component';

@Component({
  selector: 'app-subject-class',
  templateUrl: './subject-class.component.html',
  styleUrls: ['./subject-class.component.scss']
})
export class SubjectClassComponent implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private dialog: MatDialog,
    private subjectService: SubjectService
  ) { }
  config = new SubjectModel;
  gradeName: string;
  data: any = [];
  dataGrade: any = {};
  gradeId: number;
  listActive: any = [];
  tableData: any = [];
  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.gradeId = this.activeRouter.snapshot.params.gradeId;
    const levelId = this.activeRouter.snapshot.params.schoolLevelId;
    this.schoolGradeLevel.getGradeOfLevel(levelId).subscribe(res => {
      this.dataGrade = res.find(x => x._id == this.gradeId);
      this.gradeName = this.dataGrade.name
    })
    this.getListSubject();
  }

  getListSubject(){
    this.subjectService.getListSubjectOfGrade(this.gradeId).subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
         x.stt = index + 1,
         x.Count = x.count ?? 0;
      })
    })
  }

  handleTableCallback(ev) {
    if (ev.type === 'create') {
      return this.dialog.open(SubjectCreateComponent, {
        width: '600px',
        height: '250px',
        data: this.dataGrade
      }).afterClosed().subscribe(result => {
        this.getListSubject();
      })
    }
    if (ev.type === 'edit') {
      return this.dialog.open(SubjectEditComponent, {
        width: '600px',
        height: '250px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListSubject();
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
            this.subjectService.deleteSubject(ev.item[index].SubjectId).subscribe(res => {
              this.getListSubject();
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
        text: "Bạn muốn xoá môn học này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.subjectService.deleteSubject(ev.item._id).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListSubject();
          })
        }
      })
    }

  }

}
