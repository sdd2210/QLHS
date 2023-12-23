import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-gradebook-level',
  templateUrl: './gradebook-level.component.html',
  styleUrls: ['./gradebook-level.component.scss']
})
export class GradebookLevelComponent implements OnInit {


  constructor(
    private router: Router,
    private levelService: SchoolGradeLevelService,
    private memberService: MemberService,
) { }
listLevel: any = [
  // {name: 'Cấp 1'}
];
ngOnInit(): void {
    this.getListLevel();
}
routerTo(ev) {
    this.router.navigateByUrl(`/main/gradebook/gradebook-grade/level/${ev.level_key}`)
}
getListLevel() {
  const user = JSON.parse(localStorage.getItem('access_user'));
  this.memberService.getTeacherUserName().subscribe(res => {
    if(user.role_key == 'TEACHER' || user.role_key == 'STUDENTS')
    {
      this.router.navigateByUrl(`/main/gradebook/gradebook-table/class/${res.class_id}`)
    }else{
      this.levelService.getListLevelPrivilege().subscribe(res => {
        this.listLevel = res.filter(x=>x.level_key).map(x=>({...x, studentCount: -1}));
      })
    }
  });

    
    
}

}
