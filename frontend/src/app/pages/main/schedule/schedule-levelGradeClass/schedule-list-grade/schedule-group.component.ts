import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-schedule-group',
    templateUrl: './schedule-group.component.html',
    styleUrls: ['./schedule-group.component.scss']
})
export class ScheduleGroupComponent implements OnInit {
    data = [];
    constructor(
        private router: Router,
        private schoolGradeLevel: SchoolGradeLevelService,
        private activeRouter: ActivatedRoute
    ) { }
    ngOnInit(): void {
      const schoolLevelId = this.activeRouter.snapshot.params.schoolLevelId;
      this.data = [{name: 'Khối 2'}];
      this.schoolGradeLevel.getGradeOfLevel(schoolLevelId).subscribe(res => {
          this.data = res.map(x=>({...x, studentCount: -1}));
      })

    }
    callback(ev){
       this.router.navigateByUrl(`/main/schedule/gradeId/${ev.grade_key}/class`);
    }

}
