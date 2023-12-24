import { isNgTemplate } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { FormatDateService } from 'src/app/services/format-date.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss'],
})
export class EditMemberComponent implements OnInit {
  constructor(
    private formatDate: FormatDateService,
    public dialogRef: MatDialogRef<EditMemberComponent>,
    private memberService: MemberService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}
  conFig = new MemberModel();
  dataModel = {};
  option = {
    title: 'Sửa thông tin học sinh',
    type: 'create',
  };

  arrayButton = [
    {
      class: 'btn-cancel',
      text: 'Hủy bỏ',
    },
    {
      class: 'btn-save',
      text: 'Xác nhận',
    },
  ];
  listCreate = [];
  ngOnInit(): void {
    console.log(this.data)
    this.listCreate = this.conFig.detail;
    this.dataModel = {
      LastName: this.data.account.full_name,
      UserName: this.data.account.user_name,
      ParentName: this.data.parent_name,
      Email: this.data.account.email,
      DOB: this.formatDate.formatDate(this.data.account.birth_day, 'YYYY-MM-DD'),
      ClassId: this.data.class_id,
      LocationAddress: this.data.address,
      StudentGender: this.data.account.gender,
    };
    this.listCreate[5].data = [
      {
        value: this.data.class._id,
        name: this.data.class.name,
      },
    ];
    this.listCreate[4].data = [
      {
        value: 1,
        name: 'Nam',
      },
      {
        value: 2,
        name: 'Nữ',
      },
    ];
  }
  handleCallbackEvent(ev) {
    ev.item.StudentGender = +ev.item.StudentGender;
    ev.item.ParentLastname = ev.item.ParentName;
    if (ev.btn.class === 'btn-save') {
      this.memberService
        .editStudent(this.data._id, {
          account_id: this.data.account_id,
          email: ev.item.StudentEmail,
          class_id: ev.item.ClassId,
          full_name: ev.item.StudentLastName,
          user_name: ev.item.UserName,
          gender: ev.item.StudentGender,
          phone: ev.item.Phone,
          dob: ev.item.DOB,
          address: ev.item.LocationAddress,
          parent_name: ev.item.LastName,
        })
        .subscribe(
          (res) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Sửa thông tin học sinh thành công!!',
              showConfirmButton: false,
              timer: 1500,
            });
            this.dialogRef.close();
          },
          (err) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: err.error.message,
              showConfirmButton: false,
              timer: 1500,
            });
            this.dialogRef.close();
          }
        );
    }
    if (ev.btn.class === 'btn-cancel') {
      this.dialogRef.close();
    }
  }
}
