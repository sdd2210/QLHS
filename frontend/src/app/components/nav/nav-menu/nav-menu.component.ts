import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit, OnChanges {
  @Input() dataNavMenu: any;
  checkRole: any;
  constructor(
    private authService: AuthenticationService
  ) { }
  ngOnChanges(): void {
    this.checkRole = JSON.parse(localStorage.getItem('privilege_list')??'{}'); 
    this.dataNavMenu.list.forEach((x: { api: any; checkRole: boolean; }) => {
       let check = this.checkRole.find((i: { url: any; }) => i.url === x.api);
       if(check){
         x.checkRole = true;
       }
    });
    
  }

  ngOnInit(): void {


  }
}


@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, RouterModule],

  exports: [NavMenuComponent],
})
export class NavComponentModule { }