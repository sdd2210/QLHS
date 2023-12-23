import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-import-employee',
  templateUrl: './import-employee.component.html',
  styleUrls: ['./import-employee.component.scss'],
})
export class ImportEmployeeComponent implements OnInit {
  constructor(public dialoRef: MatDialogRef<ImportEmployeeComponent>) {}
  conFig = new MemberModel();
  dataModel = {};
  checkFile = {
    // type: 'download',
    // Url: 'assets/files/employee_list.xlsx',
  };
  option = {
    title: 'Import giáo viên bộ môn',
    type: 'create',
  };

  arrayButton = [
    {
      class: 'btn-cancel',
      text: 'Hủy bỏ',
    },
    {
      class: 'btn-save',
      text: 'Lưu',
    },
  ];
  listCreate = [];
  ngOnInit(): void {
    this.listCreate = this.conFig.importDataEmployee;
  }
  handleCallbackEvent(ev) {
    if (ev.btn.class === 'btn-save') {
      this.dialoRef.close(ev);
    }
    if (ev.btn.class === 'btn-cancel') {
      this.dialoRef.close(null);
    }
  }
}
