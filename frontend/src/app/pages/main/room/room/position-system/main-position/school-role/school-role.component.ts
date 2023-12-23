import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-school-role',
  templateUrl: './school-role.component.html',
  styleUrls: ['./school-role.component.scss']
})
export class SchoolRoleComponent implements OnInit, OnChanges {
  @Input() dataRoleSchool: any;
  @Input() roleId: any;
  @Input() type: string;
  @Input() roleName: any;
  @Output() callback = new EventEmitter();
  listRole: any = [];
  listPermission: any = [];
  nameRole: string;
  model: any = {};
  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }
  ngOnChanges(): void {
    this.listRole = this.dataRoleSchool;
    this.nameRole = this.roleName;
    this.listRole.forEach(x => {
      x.PrivilegeList.forEach(y => {
        y.Status = y.RoleSchoolLevelPrivilegeStatus;
      });
    });
    console.log(this.listRole);

  }
  ngOnInit(): void {

  }

  filterFunction(filterKeyList: [string], filterList) {
    let keys = filterKeyList,
      filtered = filterList.filter(
        (s => o =>
          (k => !s.has(k) && s.add(k))
            (keys.map(k => o[k]).join('|'))
        )
          (new Set)
      );
    filterList = filtered;
  }

  selectItem(checked, privilegeItem, listPrivilege, index) {
    if (this.type === 'create') {
      if (checked) {
        this.listPermission = [];
        for (let i = 0; i <= index; i++) {
          listPrivilege[i].Status = 1;
          listPrivilege[i].RoleSchoolLevelPrivilegeStatus = 1;
        }
        this.listRole.forEach(x => {
          x.PrivilegeList.forEach(element => {
            if (element.Status === 1 && element.RoleSchoolLevelPrivilegeStatus === 1) {
              let model = {
                "PrivilegeId": element.PrivilegeId,
                "SchoolLevelId": null,
                "Status": element.Status
              }
              this.listPermission.push(model);
            }
          });
        });
      }
      else {
        this.listPermission = [];
        for (let i = index; i < listPrivilege.length; i++) {
          listPrivilege[i].Status = 0;
          listPrivilege[i].RoleSchoolLevelPrivilegeStatus = 0;
        }
        this.listRole.forEach(x => {
          x.PrivilegeList.forEach(element => {
            if (element.Status === 1 && element.RoleSchoolLevelPrivilegeStatus === 1) {
              let model = {
                "PrivilegeId": element.PrivilegeId,
                "SchoolLevelId": null,
                "Status": element.Status
              }
              this.listPermission.push(model);
            }
          });
        });
      }
      console.log(this.listPermission);

    }
    else {
      this.listRole.forEach(x => {
        x.PrivilegeList.forEach(element => {
          if (element.Status === 1 && element.RoleSchoolLevelPrivilegeStatus === 1) {
            let model = {
              "PrivilegeId": element.PrivilegeId,
              "SchoolLevelId": null,
              "Status": element.Status
            }
            this.listPermission.push(model);
          }
        });
      });
      if (checked) {
        this.listPermission = [];
        for (let i = 0; i <= index; i++) {
          listPrivilege[i].Status = 1;
          listPrivilege[i].RoleSchoolLevelPrivilegeStatus = 1;
        }
        this.listRole.forEach(x => {
          x.PrivilegeList.forEach(element => {
            if (element.Status === 1 && element.RoleSchoolLevelPrivilegeStatus === 1) {
              let model = {
                "PrivilegeId": element.PrivilegeId,
                "SchoolLevelId": null,
                "Status": element.Status
              }
              this.listPermission.push(model);
            }
          });
        });
        console.log(this.listPermission);

      }
      else {
        for (let i = index; i < listPrivilege.length; i++) {
          listPrivilege[i].Status = 0;
          listPrivilege[i].RoleSchoolLevelPrivilegeStatus = 0;
        }
        this.listRole.forEach(x => {
          x.PrivilegeList.forEach(element => {
            if (element.Status === 1 && element.RoleSchoolLevelPrivilegeStatus === 1) {
    
              let model = {
                  "PrivilegeId": element.PrivilegeId,
                  "SchoolLevelId": null,
                  "Status": element.Status,
              }
              this.listPermission.push(model);
          }
          else{
              let check = this.listPermission.find(item => item.PrivilegeId === element.PrivilegeId);
              if(check){
                  check.Status = 0;
              }
          }
          });
        });
      }
      let keys = ['PrivilegeId'],
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

  selectAll(check, item) {
    if (check) {
      this.listPermission = [];
      item.PrivilegeList.forEach(x => {
        x.Status = 1;
        x.RoleSchoolLevelPrivilegeStatus = 1;
      });
      this.listRole.forEach(x => {
        x.PrivilegeList.forEach(y => {
          let model = {
            "PrivilegeId": y.PrivilegeId,
            "SchoolLevelId": null,
            "Status": y.Status
          }
          this.listPermission.push(model);
        });
        console.log(this.listPermission);
      });

    }
    else {
      this.listPermission = [];
      item.PrivilegeList.forEach(x => {
        x.Status = 0;
        x.RoleSchoolLevelPrivilegeStatus = 0;
      });
      this.listRole.forEach(x => {
        x.PrivilegeList.forEach(y => {
          let model = {
            "PrivilegeId": y.PrivilegeId,
            "SchoolLevelId": null,
            "Status": y.Status
          }
          this.listPermission.push(model);
        });
        console.log(this.listPermission);
      });
    }
  }

  save() {
    if (this.type === 'create') {
      if (this.roleName) {

        this.roleService.createRole({ Name: this.roleName }).subscribe(res => {
          this.listPermission.forEach(x => {
            x.RoleId = res.Payload;
          });
          this.roleService.assignPrivilegeForPosition(this.listPermission).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Thêm mới thành công!',
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
      if (this.roleName) {
        this.listPermission.forEach(x => {
          x.RoleId = this.roleId;
        });
        this.roleService.assignPrivilegeForPosition(this.listPermission).subscribe(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sửa thành công!',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/main/setting/position');
        });
      }
      else {
        this.callback.emit('Không được để trống trường này!')
      }
    }
  }
  cancelFunction() {
    this.router.navigateByUrl('/main/setting/position');
  }
}
