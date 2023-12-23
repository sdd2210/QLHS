import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessComponent } from 'src/app/components/pop-up/success/success.component';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
 
  data = {
    type: {
      forgot : 'forgot',
    }
   }
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}
  forgot(ev: any){
    const dialogRef = this.dialog;
    const routers = this.router;
    this.authService.forgotPassword(ev.email).subscribe({next(value) {
      dialogRef.open(SuccessComponent, {
          disableClose: true,
          data: {
            modalTitle: 'Thông báo Thành công',
            modalMessage: `Mật khẩu mới đã được tới email ${value.email??ev.email}. Vui lòng kiểm tra hộp thư!`,
          }
        }).afterClosed().subscribe(result => {
          routers.navigateByUrl('/main/member');
        });
    },error(err) {
      console.log(err);
    },})

  }
  routeTo(e: any) {
    console.log(e);
  }

}
