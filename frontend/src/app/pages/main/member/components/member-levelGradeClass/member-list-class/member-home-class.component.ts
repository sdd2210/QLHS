import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';
import { ClassCreateComponent } from '../class-create/class-create.component';
import { MemberHomeGroupComponent } from '../member-list-grade/member-home-group.component';
import { SuccessComponent } from 'src/app/components/pop-up/success/success.component';

@Component({
    selector: 'app-member-home-class',
    templateUrl: './member-home-class.component.html',
    styleUrls: ['./member-home-class.component.scss']
})
export class MemberHomeClassComponent implements OnInit {

    constructor(
        private activeRouter: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private schoolLevelGrade: SchoolGradeLevelService
    ) { }
    data: any[];
    gradeId;
    results = [];
    user_id;
    spinner = false;
    listGrade;
    timer;
    async ngOnInit() {
        this.gradeId = this.activeRouter.snapshot.params.gradeId;
        this.user_id = this.activeRouter.snapshot.params.user_id;
        if(this.gradeId){
          await this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
              this.data = res;
          });
          // await this.schoolLevelGrade.getClassStatic().subscribe(res=>{
          //     res.map(x=>{
          //         const found = this.data.findIndex(o=>o._id == x._id);
          //         if(found > -1){
          //             this.data[found].studentCount = x.studentCount;
          //             this.data[found].classCount = x.classCount;
          //         }
          //     })
          // });
          this.getGrade();
        }
        if(this.user_id){
          await this.schoolLevelGrade.getClassOfGrade(this.gradeId, this.user_id).subscribe(res => {
            this.data = res;
          });
        }
    }
    getGrade(){
        this.schoolLevelGrade.getGradeOfGradeKey(this.gradeId).subscribe(res => {
            this.listGrade =  res.find(x => x.grade_infor.grade_key === this.gradeId).grade_infor
        })
    }

    createClass(): void{
          this.dialog.open(ClassCreateComponent, {
          //   width: '500px',
          //   height: '350px',
            disableClose: true,
            data: this.listGrade
          }).afterClosed().subscribe(result => {

              this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
                  this.data = res;
              });
          });
          
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/class/${ev._id}`])

    }
    delete(ev){
        Swal.fire({
            text: "Bạn muốn xoá lớp này không?",
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33',
            cancelButtonText: 'Huỷ',
            confirmButtonText: 'Xoá'
          }).then((result) => {
            if (result.isConfirmed) {
              this.schoolLevelGrade.deleteClass(ev._id).subscribe(res => {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Xoá lớp thành công!',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
                    this.data = res;
                });
              }, (err) => {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: err.error.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
            }
          })
    }
    searchMember(keyword){
      return this.schoolLevelGrade.getClassOfGrade(this.gradeId, this.user_id, keyword);
    }

    setDefaultImg(item) {
      item.MediaURL = 'assets/img/default-avatar.jpg';
    }

    onSearchKey = (keyword) => {

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
          this.spinner = true;
          this.searchMember(keyword).subscribe(res => {
              this.data = res;
              this.spinner = false;
          })
      }, 500);

  }
}
