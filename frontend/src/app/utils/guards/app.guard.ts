import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localstorage.service';
@Injectable({
  providedIn: 'root',
})
export class AppGuard {
  constructor(
    private localStorageService: LocalStorageService,
    public route: Router
  ) { }
   
  

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.localStorageService.get('access_token')) {
      this.route.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
  
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.localStorageService.get('access_token')) {
      this.route.navigate(['main']);
      return false;
    }
    else {
      return true;
    }
  }
}


