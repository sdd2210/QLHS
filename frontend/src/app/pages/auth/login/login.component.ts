import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/components/dialog/change-password/change-password.component';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { RecreatePwdComponent } from '../components/recreate-pwd/recreate-pwd.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService,
    public dialog: MatDialog
  ) { }
  error = "";
  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void {

  }

  getPrivilegeList() {
    this.authService.getPrivilegeList().subscribe({
      next(value) {
        localStorage.setItem('privilege_list', JSON.stringify(value));
      }, error(err) {
        console.log(err);
      },
    })
  }

  login(ev: { username: any; password: any; }) {
    this.authService.login(ev.username, ev.password).subscribe({
      next: (res: any) => {
        if (res.accessToken) {
          localStorage.setItem('access_token', res.accessToken);
          this.getPrivilegeList();

          localStorage.setItem('access_user', JSON.stringify(res.user));
          localStorage.setItem('current_semester', JSON.stringify(res.semester));
          setTimeout(() => {
            this.router.navigateByUrl('/main/member');

          }, 1000);
        } else {

          const dialogRef = this.dialog.open(RecreatePwdComponent, 
            { disableClose: true,
              autoFocus: true,
              data: { _id: res.user._id, test: 2 } 
            });
          if (dialogRef) {
            dialogRef.afterClosed().subscribe(
              data => {
                console.log(data);
              }
            );
          }
        }
      },
      error: (e: any) => {
        this.error = "Sai tên đăng nhập hoặc mật khẩu."
        // setTimeout(() => {
        //   this.router.navigateByUrl('/main/member');

        // }, 1000);
      },
    })
  }
  routeTo(e: any) {
    console.log(e);
  }
}
