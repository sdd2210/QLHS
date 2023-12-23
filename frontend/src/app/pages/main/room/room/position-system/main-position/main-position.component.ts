import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-main-position',
  templateUrl: './main-position.component.html',
  styleUrls: ['./main-position.component.scss']
})
export class MainPositionComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private roleService: RoleService
  ) { }
  check;
  type: string;
  roleId;
  error: string;
  dataRoleSchool: any = [];
  dataCreate: any = [];
  model: any = {};
  data: any = [];
  ngOnInit(): void {
     const url  = window.location.href.split('/');
     if(url.includes("create-position")){
       this.type = "create";
       this.check = true;
       this.roleService.listRoleSchoolOfStudent(null).subscribe(res => {
        this.dataCreate = res;
      });
      this.roleService.listRoleSchool(null).subscribe(res => {
        this.dataRoleSchool = res;
        console.log(res);
        
      })
     }
     else{
       this.type = "edit";
       this.check = false;
       this.roleId = +this.activatedRoute.snapshot.params.roleId;
       this.roleService.getListRole().subscribe(res => {
           this.model = res.find(x => x.RoleId === this.roleId);
       })
       this.roleService.listRoleSchoolOfStudent(this.roleId).subscribe(res => {
         this.data = res;
         this.data.map(x => x.RoleId = this.roleId);
       });
       this.roleService.listRoleSchool(this.roleId).subscribe(res => {
        this.dataRoleSchool = res;
      })
     }
  }
  handleEvent(ev){
      console.log(ev);
      this.error = ev;
  }
  validateInput(ev){
    if(ev === ""){
      this.error  = "Không để trống trường này!"
    }
    else{
      this.error = "";
    }
  }

}
