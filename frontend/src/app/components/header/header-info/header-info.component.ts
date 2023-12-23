import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileModel } from 'src/app/models/profile/profile.model';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { MemberService } from 'src/app/services/member.service';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  profile!: Observable<ProfileModel>;
  name!: string;
  mediaURL!: string;
  constructor(
    private route: Router,
    private profileService: ProfileService,
    private memberService: MemberService,
    private authService: AuthenticationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProfile()
  }

  btnLogout() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      text: "",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Không',
      confirmButtonText: 'Có',

    }).then((result) => {
      if (result.isConfirmed) {
        console.log('hshhs')
        this.authService.logout().subscribe(
          data => console.log("Dialog output:", data)
        ); 
        localStorage.clear();
        this.route.navigate(['']);
      }
    })

  }

  getProfile() {
    const user = JSON.parse(localStorage.getItem('access_user')??'{}');
    this.name = user.full_name;
    this.mediaURL = user.avatar_url ?? 'assets/img/default-avatar.jpg';
    
  }
  changePassword(){
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
