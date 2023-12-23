import { Component, OnInit } from '@angular/core';
import { MemberModel } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { Observable, lastValueFrom } from 'rxjs';
import { FormatDateService } from 'src/app/services/format-date.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/components/dialog/change-password/change-password.component';


@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.scss']
})
export class UserInforComponent implements OnInit{

  constructor(
    public dialog: MatDialog,
    private memberService: MemberService,
    private formatDateService: FormatDateService,
  ) {}
  conFig = new MemberModel();
  pass: Observable<any>;
  public dataModel: any = {
  };
  checkFile = {};
  error: any = [];
  option: any = {
    title: 'Thông tin cá nhân',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Đổi mật khẩu'
  }, {
    class: 'btn-save',
    text: 'Xác nhận'
  },
  ];
  listCreate = [] as any[];
  
  async ngOnInit(): Promise<void> {
    this.listCreate = this.conFig.editUser;
    const user = JSON.parse(localStorage.getItem('access_user'));
    this.pass = this.memberService.getTeacherUserName();
    const user_infor = await lastValueFrom(this.pass);
    this.dataModel = {
      LastName: user_infor.full_name,
      UserName: user_infor.user_name,
      ParentLastName: user_infor?.student?.parent_name,
      Email: user_infor.email,
      DOB: this.formatDateService.formatDate(user_infor.birth_day, 'YYYY-MM-DD') ,
      LocationAddress: user_infor?.teacher?.address ?? user_infor?.student?.address ?? user_infor?.employee[0]?.address,
      Gender: user_infor.gender,
      Phone: user_infor.phone,
    };
    if(user.role_key == 'ADMIN')
    {
      this.listCreate = this.listCreate.filter(x=> !['ParentLastName','LocationAddress'].includes(x.id));
    }
    if(user.role_key != 'STUDENTS')
    {
      this.listCreate = this.listCreate.filter(x=> !['ParentLastName'].includes(x.id));
    }
  }
  

  handleCallbackEvent(ev : any) {
      const user = JSON.parse(localStorage.getItem('access_user'));
      if(ev.btn.class === "btn-save"){
        this.memberService.updateInfor({
          email: ev.item.Email,
          class_id: ev.item.ClassId,
          full_name: ev.item.LastName,
          user_name: ev.item.UserName,
          gender: +ev.item.Gender,
          phone: ev.item.Phone,
          birth_day: new Date(ev.item.DOB),
          address: ev.item.LocationAddress,
          parent_name: ev.item.ParentLastName,
        }).subscribe(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sửa thông tin thành công!',
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem('access_user',JSON.stringify({...res,password: undefined}));
          window.location.reload();
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
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(ChangePasswordComponent, dialogConfig);
        console.log(dialogRef);
        if(dialogRef)
        {
          dialogRef.afterClosed().subscribe(
              data => console.log("Dialog output:", data)
          );    
        }
      }
       
  }
}
