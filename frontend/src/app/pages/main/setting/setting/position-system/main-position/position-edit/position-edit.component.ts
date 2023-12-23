import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {

  constructor() { }
  dataRole: any = [];
  columnMember: any = [];
  ngOnInit(): void {
  }
  selectAll(check, item){
    // this.dataTable.forEach(x => {
    //     x.check = check;
    // });
    
  }
  changeEvent(value, listSchoolLevel, ListRole){
    console.log(value, listSchoolLevel, ListRole);
    
  }

}
