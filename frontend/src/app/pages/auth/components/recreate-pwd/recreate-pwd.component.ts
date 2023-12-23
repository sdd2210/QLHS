import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recreate-pwd',
  templateUrl: './recreate-pwd.component.html',
  styleUrls: ['./recreate-pwd.component.scss']
})
export class RecreatePwdComponent {

  constructor(
    public dialoRef: MatDialogRef<RecreatePwdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {_id : string},
    private authenService: AuthenticationService,
    public router: Router,
  ) {
    this.success = 0;
  }

  form = new FormGroup({
    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl('')
  }
  )

  err;
  success

  


  ngOnInit() {
  }
  change() {
    if(this.form.get('NewPassword').value !== this.form.get('ConfirmPassword').value)
    {
      this.err = 'Mật khẩu không trùng';
    }else{
      this.authenService.resetPassword({new_pwd: this.form.value.NewPassword, id: this.data._id}).subscribe(
        (res:any) => {
          localStorage.setItem('access_token', res.accessToken);
          this.authenService.getPrivilegeList();
          
          localStorage.setItem('access_user', JSON.stringify(res.user));
          this.dialoRef.close();
          setTimeout(() => {
            this.router.navigateByUrl('/main/member');
  
          }, 1000);
        },
        (error) => {
          this.err = error.error.message
        }
      );  
    }
  }


}

@NgModule({
  declarations: [RecreatePwdComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RecreatePwdComponent],
})
export class RecreatePwdModule {}
