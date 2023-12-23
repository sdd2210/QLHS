import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-member-home-group',
    templateUrl: './member-home-group.component.html',
    styleUrls: ['./member-home-group.component.scss']
})
export class MemberHomeGroupComponent implements OnInit {
    
    data = [];

    schoolLevelId: any;
    constructor(
        private getrouter: ActivatedRoute,
        private router: Router,
        private levelGradeClassService: SchoolGradeLevelService
    ) {
    }

    ngOnInit() {
        this.schoolLevelId = this.getrouter.snapshot.params.schoolLevelId;
        this.getListGrade();
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/list-class/${ev.grade_key}`])
    }
    getListGrade(){
        this.levelGradeClassService.getGradeOfLevel(this.schoolLevelId).subscribe(res => {
              this.data = res;
        });
        this.levelGradeClassService.getGradeStatic().subscribe(res=>{
            res.map(x=>{
                const found = this.data.findIndex(o=>o._id == x._id);
                if(found > -1){
                    this.data[found].studentCount = x.studentCount;
                    this.data[found].classCount = x.classCount;
                }
            })
        })
    }

}
