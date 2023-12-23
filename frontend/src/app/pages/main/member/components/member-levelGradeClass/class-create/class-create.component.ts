import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.scss']
})
export class ClassCreateComponent implements OnInit, OnChanges {

  constructor(
    private schoolService: SchoolGradeLevelService,
    public dialogRef: MatDialogRef<ClassCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'Thêm lớp mới',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Xác nhận'
  },
  ];
  listCreate = [];


  ngOnChanges(): void {

  }

  ngOnInit(): void {
    this.dataModel = this.data;
    this.listCreate = this.conFig.createClass;
    this.listCreate[0].data = [{
      name: this.data.name,
      value: this.data.grade_id
    }]
  }
  handleCallbackEvent(ev) {
    if (ev.btn.class === 'btn-cancel') {
      console.log(ev);
      this.dialogRef.close(null);
    }
    if (ev.btn.class === 'btn-save') {
      const model = {
        grade_id: ev.item._id,
        class_name: ev.item.ClassName,
      }
      this.schoolService.createClass(model).subscribe(res => {
      })
      this.dialogRef.close(ev.item);
    }
    ev.item.ClassName = null;
  }
  handleDeleteCallBack(ev) {
  }
}
