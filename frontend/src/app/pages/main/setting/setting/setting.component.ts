import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('access_user'));
    if(user.role_key != 'ADMIN'){
      this.router.navigateByUrl(`/main/setting/infor-user`);
    }
  }

}
