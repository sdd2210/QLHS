import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberModule),
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
      },
      {
        path: 'room',
        loadChildren: () => import('./room/room.module').then(m => m.RoomModule),
      },
      {
        path: 'gradebook',
        loadChildren: () =>
          import('./gradebook/gradebook.module').then((m) => m.GradeBookModule),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
      },
      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
    ],
  },
];
