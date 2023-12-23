import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-subject-level',
  templateUrl: './subject-level.component.html',
  styleUrls: ['./subject-level.component.scss']
})
export class SubjectLevelComponent implements OnInit {


  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private memberService: MemberService
  ) { }
  data: any = [];
  ngOnInit(): void {

    this.schoolGradeLevel.getListLevelPrivilege().subscribe(res => {
      this.data = res.filter(x=>x.level_key).map(x=>({...x, studentCount: -1, classCount: -1}));;
    });
  }
  callback(ev) {
    this.router.navigateByUrl(`/main/setting/subject/list-grade/${ev.level_key}`)
  }

}
