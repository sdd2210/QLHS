import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MemberModel } from 'src/app/models/member.model';
import { RoleService } from 'src/app/services/role.service';
import { EmployeeEditComponent } from '../employee/employee-edit/employee-edit.component';
import { AddEmployeeComponent } from '../school-group-admin/add-employee/add-employee.component';

@Component({
  selector: 'app-member-role-detail',
  templateUrl: './member-role-detail.component.html',
  styleUrls: ['./member-role-detail.component.scss']
})
export class MemberRoleDetailComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private roleService: RoleService,
    private activeRouter: ActivatedRoute
  ) { }
  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [];
  roleName: string;
  roleId: number;
  ngOnInit(): void {
    this.roleId = +this.activeRouter.snapshot.params.roleId;
    this.listActive = this.config.btnAdmin;
    this.tableData = this.config.collumsAdmin;
    this.getListRole();
  }
  
  getListRole(){
    this.roleService.getListRole().subscribe(res => {
       let roleDetail = res.find(x => x.RoleId === this.roleId);
       this.roleName = roleDetail.Name;
       this.getListUserOfRole(this.roleId);
      
    })
  }
  getListUserOfRole(roleId){
    this.roleService.getListEmployeeOfRole(roleId).subscribe(res => {
        this.data = res;
        this.data.forEach((x, index) => {
          x.stt = index + 1;
        })
      
    })
  }
  handleTableCallback(ev) {
    if (ev.type === 'create') {
      return this.dialog.open(AddEmployeeComponent, {
        width: '500px',
        height: '500px',
        data: {
          RoleId: this.roleId
        }
      }).afterClosed().subscribe(result => {
        this.getListRole();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(EmployeeEditComponent, {
        width: '500px',
        height: '750px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListRole();
      });
    }
  }
   


}
