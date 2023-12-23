import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, RouterModule, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { AppGuard } from './utils/guards/app.guard';

const canActivate: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(AppGuard).canActivate();
    };
const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(AppGuard).canLoad();
};
    

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
        import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [canActivate],
  },
  {
    path: 'main',
    loadChildren: () =>
        import('./pages/main/main.module').then((m) => m.MainModule),
    canMatch: [canMatch],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
