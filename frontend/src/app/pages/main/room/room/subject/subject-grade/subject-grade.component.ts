import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-subject-grade',
  templateUrl: './subject-grade.component.html',
  styleUrls: ['./subject-grade.component.scss']
})
export class SubjectGradeComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private activeRouter: ActivatedRoute
  ) { }
  data: any =[];
  levelId: any ;
  ngOnInit(): void {
    this.levelId  = this.activeRouter.snapshot.params.schoolLevelId;
    this.schoolGradeLevel.getGradeOfLevel(this.levelId).subscribe(res => {
      this.data = res.map(x=>({...x, studentCount: -1, classCount: -1}));
  })
  }
  callback(ev){
    this.router.navigateByUrl(`/main/setting/subject/level/${this.levelId}/grade/${ev._id}`)
 }
}
