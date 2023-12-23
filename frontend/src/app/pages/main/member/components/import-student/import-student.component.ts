import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-import-student',
  templateUrl: './import-student.component.html',
  styleUrls: ['./import-student.component.scss']
})
export class ImportStudentComponent implements OnInit {
  constructor(
    public dialoRef: MatDialogRef<ImportStudentComponent>,
  ) { }
  conFig = new MemberModel;
  dataModel = {};
  checkFile = {
    type: 'download',
    Url: 'assets/files/student_list.xlsx'
  }
  option = {
    title: 'Import học sinh',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Lưu'
  },
];
  listCreate = [];
  ngOnInit(): void {
      this.listCreate = this.conFig.importDataStudent;
  }
  handleCallbackEvent(ev) {
      if(ev.btn.class === 'btn-save'){
        this.dialoRef.close(ev);
      }
      if(ev.btn.class === 'btn-cancel'){
        this.dialoRef.close(null);
      }
      
  }
}
