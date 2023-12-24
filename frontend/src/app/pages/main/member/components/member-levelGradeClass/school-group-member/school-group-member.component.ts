import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-school-group-member',
  templateUrl: './school-group-member.component.html',
  styleUrls: ['./school-group-member.component.scss']
})
export class SchoolGroupMemberComponent implements OnInit {

  constructor(
    private levelService: SchoolGradeLevelService,
    private router: Router,
    private roleService: RoleService
  ) { }
  school = [
    {
      name: "Giáo viên bộ môn",
      Type: "Employee",
      studentCount: 3
    },
    // {
    //   name: "Admin",
    //   Type: "Admin",
    //   studentCount: 3
    // },
    {
      name: "Giáo viên chủ nhiệm",
      Type: "Teacher",
      studentCount: 3
    },
  ];
  role: any = [];
  listLevel: any = [];
  ngOnInit(): void {
    this.getListLevel();
    this.getListRole();
    // this.levelService.getUserGroup().subscribe(res => {
      // this.school = [
      //   {
      //     name: "Cán bộ, nhân viên",
      //     Type: "Employee",
      //     count: 100
      //   },
      //   {
      //     name: "Giáo viên chủ nhiệm",
      //     Type: "Teacher",
      //     count: 100
      //   }
      // ]
    // })

  }

  getListRole() {
    // this.roleService.getListRole().subscribe(res => {
    //   this.role = res;
    //   this.role.map(x => {
    //     x.Type = "Role",
    //       x.StudentCount = x.UserprofileCount
    //   });
    // })
  }

  routerTo(ev) {
    console.log(ev);

    if (ev.Type === 'Teacher') {
      this.router.navigateByUrl("/main/member/member-home/school-group-member/teacher");
    }
    if (ev.Type === 'Admin') {
      console.log(ev);
      this.router.navigateByUrl("/main/member/member-home/school-group-member/admin");
    }
    if (ev.Type === 'Employee') {
      this.router.navigateByUrl("/main/member/member-home/school-group-member/employee");
    }
    if (ev.Type === 'Role') {
      this.router.navigateByUrl(`/main/member/member-home/school-group-member/role/${ev.RoleId}`)
    }
  }
  handleEvent(ev) {
    console.log(ev);

  }


  getListLevel() {
  }

}
