import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeModel } from 'src/app/models/auth/change.model';
import { BaseButtonModule } from '../../button/base-button/base-button.component';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    OldPassword: new FormControl(''),
    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl('')
  }
  )

  err;
  success;

  // dataBtnSC = {
  //   cssClass: 'btn-sc',
  // };

  // dataBtnCancel = {
  //   cssClass: 'btn-cancel',
  // };

  constructor(
    public dialoRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authenService: AuthenticationService,
    public router: Router,
    private local: LocalStorageService
  ) {
    this.success = 0;
  }

  get checkstatus()
  { return 'jsjjs'}

  ngOnInit() {
  }
  close() {
    console.log(this.success);
    this.dialoRef.close();
  }
  change() {
    if(this.form.value.NewPassword != this.form.value.ConfirmPassword){
      this.err = 'Mật khẩu mới không khớp';
      return;
    }

    if(this.form.value.NewPassword == this.form.value.OldPassword){
      this.err = 'Mật khẩu mới phải khác mật khẩu cũ';
      return;
    }

    this.authenService.changePassword({
      new_pwd: this.form.value.NewPassword,
      cur_pwd: this.form.value.OldPassword,
    }).subscribe(
      (res:any) => {
        this.success = "Bạn cần đăng nhập lại";
      },
      (error) => {
        this.err = error.error.message
      }
    );  
  }

  confirm() {
    this.local.clear();
    this.close();
    this.router.navigate([''])
    
  }
}
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseButtonModule, MatDialogModule],
  exports: [ChangePasswordComponent],
})
export class ChangePasswordModule {}
