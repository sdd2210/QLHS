import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { RoleService } from 'src/app/services/role.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@Component({
  selector: 'app-school-group-admin',
  templateUrl: './school-group-admin.component.html',
  styleUrls: ['./school-group-admin.component.scss']
})
export class SchoolGroupAdminComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private roleService: RoleService
  ) { }
  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [];
  roleId: number;
  ngOnInit(): void {
    this.listActive = this.config.btnAdmin;
    this.tableData = this.config.collumsAdmin;
    this.getListRole();
  }
  
  getListRole(){
    this.roleService.getListRole().subscribe(res => {
       let roleDetail = res.find(x => x.Name === "Admin");
       this.roleId = roleDetail.RoleId;  
       this.getListUserOfAdmin(this.roleId);
      
    })
  }
  getListUserOfAdmin(roleId){
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
  }
   

}
