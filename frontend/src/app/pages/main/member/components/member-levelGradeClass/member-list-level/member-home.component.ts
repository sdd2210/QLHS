import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-member-home',
    templateUrl: './member-home.component.html',
    styleUrls: ['./member-home.component.scss']
})
export class MemberHomeComponent implements OnInit {

    constructor(
        private levelService: SchoolGradeLevelService,
        private router: Router,
        private memberService: MemberService,
        public http: HttpClient,
        public handle: HttpBackend,
    ) {
        this.http = new HttpClient(handle);
     }
    school = [];
    results = [];
    listStudent;
    keypress;
    check: boolean = true;
    listLevel: any = [];
    spinner = false;
    timer;
    httpSearchStudent = ''
    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('access_user'));
        this.memberService.getTeacherUserName().subscribe(res => {
            console.log(res);
            if (user.role_key == "TEACHER") {
                this.router.navigateByUrl(`/main/member/member-home/class/${res.class_id}`)
            }else if (user.role_key == "ADMIN") {
                this.getListLevel();
            }
            else {
                this.router.navigateByUrl(`/main/member/member-home/list-class/user/${res._id}`)
            }
        })

    }
    searchMember(keyword){
        return this.memberService.getListStudent(keyword).pipe(map((res: any) => res));
    }
    getUserGroup() {
        const user = JSON.parse(localStorage.getItem('access_user'));
        
        this.levelService.getEmployeeStatic().subscribe(res => {
            console.log(res)
            if(user.role_key !== 'STUDENTS')
            {
                this.school = [
                    {
                        Description: "quản lý nhà trường",
                        name: "Nhà trường",
                        classCount: 2,
                        studentCount: res
                    }
                ];
            }
        })
    }
    setDefaultImg(item) {
        item.MediaURL = 'assets/img/default-avatar.jpg';
    }
    getAllStudent() {
        this.memberService.searchMember("", "").subscribe(res => {
        })
    }
    onSearchKey = (keyword) => {
        if (!keyword) {
            this.results = [];
        }
        else {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.spinner = true;
                this.searchMember(keyword).subscribe(res => {
                    this.results = res.original;
                    this.spinner = false;
                })
            }, 500);
        }

    }
    routerTo(ev) {
        this.router.navigateByUrl(`/main/member/member-home/list-grade/${ev.level_key}`)
    }

    routerSchoolLevel(ev) {
        this.router.navigateByUrl("/main/member/member-home/school-group-member");
    }
    clickStudent(item) {
        this.router.navigateByUrl(`/main/member/member-home/class/${item.class_id}`);
    }
    getListLevel() {
        this.levelService.getListLevelPrivilege().subscribe(res => {
            this.listLevel = res.filter(x=>x.level_key);
            
            let check = res.find(x=>!x.level_key);
            if(check) {
                this.getUserGroup()
            };
        })
    }
}
