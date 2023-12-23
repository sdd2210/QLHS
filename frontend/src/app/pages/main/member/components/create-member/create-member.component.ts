import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { Notification } from 'src/app/models/noti.model';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private memberService: MemberService
  ) {}

  conFig = new MemberModel;
  dataModel = {};
  checkFile = {};
  error: any = [];
  option = {
    title: 'Thêm học sinh mới',
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
  listCreate = [] as any[];
  
  ngOnInit(): void {
    this.listCreate = this.conFig.create;
    
    const model = {
      ClassName: this.data.name,
      ClassId: this.data._id,
      StudentGender: 1
    }
    this.dataModel = model;    
    this.listCreate[6].data = [{
      value: this.data._id,
      name: this.data.name,
    }]
    console.log('đhdh',this.listCreate)
    
  }
  handleCallbackEvent(ev : any) {
       ev.item.StudentGender = +ev.item.StudentGender;
      if(ev.btn.class === "btn-save"){
        this.memberService.createStudent({
          email: ev.item.StudentEmail,
          class_id: ev.item.ClassId,
          full_name: ev.item.StudentLastName,
          user_name: ev.item.UserName,
          gender: ev.item.StudentGender,
          phone: ev.item.Phone,
          dob: ev.item.DOB,
          address: ev.item.StudentLocationAddress,
          parent_name: ev.item.LastName,
        }).subscribe(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm học sinh thành công!',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }, (err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
            timer: 1500
          })
          // console.log(err)
          // this.dialogRef.close();
          // if(err.error.Ok === false){
          //   this.error = err.error.Message;
          // }
          // else{
          //   this.error = err.error.ModelState[""];
          // }
        })
        
      }
      if(ev.btn.class === "btn-cancel"){
        this.dialogRef.close();
      }
       
  }
}
