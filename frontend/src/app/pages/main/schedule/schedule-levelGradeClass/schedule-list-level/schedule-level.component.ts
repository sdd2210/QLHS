import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-schedule-level',
  templateUrl: './schedule-level.component.html',
  styleUrls: ['./schedule-level.component.scss']
})
export class ScheduleLevelComponent implements OnInit {
  data = [];
  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private activeRouter: ActivatedRoute,
    private memberService: MemberService
  ) { }
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('access_user')).role_key;
    this.memberService.getTeacherUserName().subscribe(res => {
      if (user.toLowerCase() === "teacher" || user.toLowerCase() === "students") {
        this.router.navigateByUrl(`/main/schedule/schedule-list/grade/${res.grade[0].grade_key}/class/${res.class_id}`)
      }
      else {
        this.schoolGradeLevel.getListLevelPrivilege().subscribe(res => {
          this.data = res.filter(x=>x.level_key).map(x=>({...x, studentCount: -1}));
      })
      }
    })
  }
  callback(ev) {
    // this.router.navigateByUrl(`/main/schedule/grade/${ev.SchoolLevelId}`);
    this.router.navigateByUrl(`/main/schedule/grade/${ev.level_key}`);
  }


}
