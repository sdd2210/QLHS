import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinct, findIndex, of } from 'rxjs';
import { RoleService } from 'src/app/services/role.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-student-role',
    templateUrl: './student-role.component.html',
    styleUrls: ['./student-role.component.scss']
})
export class StudentRoleComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() roleName: any;
    @Input() type: string;
    @Input() roleId: number;
    @Output() callback = new EventEmitter();
    constructor(
        private levelService: SchoolGradeLevelService,
        private settingService: RoleService,
        private router: Router
    ) { }

    listPermission: any = [];
    columnMember: any = [];
    name: string;
    dataRole: any = [];
    listSchoolLevel: any = [];
    ngOnChanges(changes: SimpleChanges): void {
        this.dataRole = this.data;
        this.name = this.roleName;
        this.dataRole.forEach(x => {
            x.PrivilegeList.forEach(i => {
               i.RoleSchoolLevelPrivilegeStatus = 1;
            });
        });
    }

    ngOnInit(): void {
        this.name = this.roleName;
        this.levelService.getListLevel().subscribe(res => {
            this.columnMember = res;
        });
    


    }
    selectAllSchool(value, checked) {

    }
    selectAll(check, item, schoolLevel) {
        if (check) {
            item.forEach(element => {
                element.SchoolLevelList.forEach(x => {
                    if (x.SchoolLevelId === schoolLevel.SchoolLevelId) {
                        x.RoleSchoolLevelPrivilegeStatus = 1;
                        let model = {
                            "PrivilegeId": element.PrivilegeId,
                            "SchoolLevelId": schoolLevel.SchoolLevelId,
                            "Status": 1
                        }
                        this.listPermission.push(model);
                    }
                });
            });
        }
        else {
            item.forEach(element => {
                element.SchoolLevelList.forEach(x => {
                    if (x.SchoolLevelId === schoolLevel.SchoolLevelId) {
                        x.RoleSchoolLevelPrivilegeStatus = 0;
                        let check = this.listPermission.findIndex(x => x.PrivilegeId === element.PrivilegeId && x.SchoolLevelId === schoolLevel.SchoolLevelId);
                        this.listPermission.splice(check, 1);
                    }
                });
            });
        }

        console.log(this.listPermission);
    }

    changeEvent(value, item, privilege, schoolLevel, ix, schoolLevelIx) {
        if(this.type === 'create'){
            if (value) {
                schoolLevel.RoleSchoolLevelPrivilegeStatus = 1;
                for (let index = 0; index <= ix; index++) {
                    item.PrivilegeList[index].RoleSchoolLevelPrivilegeStatus = 1;
                    item.PrivilegeList[index].SchoolLevelList[schoolLevelIx].RoleSchoolLevelPrivilegeStatus = 1;
                    let model = {
                        "PrivilegeId": item.PrivilegeList[index].PrivilegeId,
                        "SchoolLevelId": item.PrivilegeList[index].SchoolLevelList[schoolLevelIx].SchoolLevelId,
                        "Status": 1,
                    }
                    this.listPermission.push(model);
                }
                let keys = ['PrivilegeId', 'SchoolLevelId'],
                    filtered = this.listPermission.filter(
                        (s => o =>
                            (k => !s.has(k) && s.add(k))
                                (keys.map(k => o[k]).join('|'))
                        )
                            (new Set)
                    );
                this.listPermission = filtered;
                console.log(this.listPermission);
    
            }
            else {
                this.listPermission = [];
                for (let index = ix; index < item.PrivilegeList.length; index++) {
                    let privilege = item.PrivilegeList[index];
                    privilege.SchoolLevelList[schoolLevelIx].RoleSchoolLevelPrivilegeStatus = 0;
                }
                console.log("privilege",item.PrivilegeList);
                
                item.PrivilegeList.forEach(x => {
                    x.SchoolLevelList.forEach(i => {
                        if (x.RoleSchoolLevelPrivilegeStatus === 1 && i.RoleSchoolLevelPrivilegeStatus === 1) {
    
                            let model = {
                                "PrivilegeId": x.PrivilegeId,
                                "SchoolLevelId": i.SchoolLevelId,
                                "Status": 1,
                            }
                            this.listPermission.push(model);
                        }
                    });
                });
                let keys = ['PrivilegeId', 'SchoolLevelId'],
                    filtered = this.listPermission.filter(
                        (s => o =>
                            (k => !s.has(k) && s.add(k))
                                (keys.map(k => o[k]).join('|'))
                        )
                            (new Set)
                    );
                this.listPermission = filtered;
                console.log(this.listPermission);
            }
        }
        // edit
        else{
            item.PrivilegeList.forEach(x => {
                x.SchoolLevelList.forEach(i => {
                    if (x.RoleSchoolLevelPrivilegeStatus === 1 && i.RoleSchoolLevelPrivilegeStatus === 1) {

                        let model = {
                            "PrivilegeId": x.PrivilegeId,
                            "SchoolLevelId": i.SchoolLevelId,
                            "Status": 1,
                        }
                        this.listPermission.push(model);
                    }
                });
            });   
            if (value) {
                this.listPermission = [];
                schoolLevel.RoleSchoolLevelPrivilegeStatus = 1;
                for (let index = 0; index <= ix; index++) {
                    item.PrivilegeList[index].RoleSchoolLevelPrivilegeStatus = 1;
                    item.PrivilegeList[index].SchoolLevelList[schoolLevelIx].RoleSchoolLevelPrivilegeStatus = 1;
                    let model = {
                        "PrivilegeId": item.PrivilegeList[index].PrivilegeId,
                        "SchoolLevelId": item.PrivilegeList[index].SchoolLevelList[schoolLevelIx].SchoolLevelId,
                        "Status": 1,
                    }
                   
                }
                item.PrivilegeList.forEach(x => {
                    x.SchoolLevelList.forEach(i => {
                        if (x.RoleSchoolLevelPrivilegeStatus === 1 && i.RoleSchoolLevelPrivilegeStatus === 1) {
    
                            let model = {
                                "PrivilegeId": x.PrivilegeId,
                                "SchoolLevelId": i.SchoolLevelId,
                                "Status": 1,
                            }
                            this.listPermission.push(model);
                        }
                    });
                });   
                console.log(this.listPermission);
            }
            else {
                for (let index = ix; index < item.PrivilegeList.length; index++) {
                    let privilege = item.PrivilegeList[index];
                    privilege.SchoolLevelList[schoolLevelIx].RoleSchoolLevelPrivilegeStatus = 0;
                }
                item.PrivilegeList.forEach(x => {
                    x.SchoolLevelList.forEach(i => {
                        if (x.RoleSchoolLevelPrivilegeStatus === 1 && i.RoleSchoolLevelPrivilegeStatus === 1) {
    
                            let model = {
                                "PrivilegeId": x.PrivilegeId,
                                "SchoolLevelId": i.SchoolLevelId,
                                "Status": 1,
                            }
                            this.listPermission.push(model);
                        }
                        else{
                            let check = this.listPermission.find(item => item.PrivilegeId === x.PrivilegeId && item.SchoolLevelId === i.SchoolLevelId);
                            if(check){
                                check.Status = 0;
                            }
                        }
                    });
                });
                let keys = ['PrivilegeId', 'SchoolLevelId'],
                    filtered = this.listPermission.filter(
                        (s => o =>
                            (k => !s.has(k) && s.add(k))
                                (keys.map(k => o[k]).join('|'))
                        )
                            (new Set)
                    );
                this.listPermission = filtered;
                console.log(this.listPermission);
                
            }
        }


    }

    save() {
        if (this.type === "create") {
            if (this.name) {
                this.settingService.createRole({ Name: this.name }).subscribe(res => {
                    this.listPermission.forEach(x => {
                        x.RoleId = res.Payload;
                    });
                    this.settingService.assignPrivilegeForPosition(this.listPermission).subscribe(res => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Tạo mới thành công!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.router.navigateByUrl('/main/setting/position');
                    })
                })
            }
            else {
                this.callback.emit('Không được để trống trường này!')
            }
        }
        else {
            this.settingService.editRole(this.roleId, { Name: this.name }).subscribe(res => {

            });
            this.listPermission.forEach(x => {
                x.RoleId = this.roleId;
            });
            this.settingService.assignPrivilegeForPosition(this.listPermission).subscribe(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sửa thành công!',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.router.navigateByUrl('/main/setting/position');
            })
        }

    }
    cancelFunction() {
        this.router.navigateByUrl('/main/setting/position');
    }

}
