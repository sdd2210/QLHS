import { Routes } from "@angular/router";
import { MainPositionComponent } from "./setting/position-system/main-position/main-position.component";
import { PositionCreateComponent } from "./setting/position-system/main-position/position-create/position-create.component";
import { PositionEditComponent } from "./setting/position-system/main-position/position-edit/position-edit.component";
import { PositionSystemComponent } from "./setting/position-system/position-system.component";
import { SchoolYearComponent } from "./setting/school-year/school-year.component";
import { SettingComponent } from "./setting/setting.component";
import { SubjectClassComponent } from "./setting/subject/subject-class/subject-class.component";
import { SubjectGradeComponent } from "./setting/subject/subject-grade/subject-grade.component";
import { SubjectLevelComponent } from "./setting/subject/subject-level/subject-level.component";
import { SubjectComponent } from "./setting/subject/subject.component";
import { UserInforComponent } from "./setting/user-infor/user-infor.component";


export const settingRoute: Routes = [
  {
    path: '',
    component: SettingComponent,
  },
  {
    path: 'infor-user',
    component: UserInforComponent,
  },
  {
    path: 'school-year',
    component: SchoolYearComponent,
  },
  {
    path: 'position',
    component: PositionSystemComponent,
  },
  {
    path: 'subject/level',
    component: SubjectLevelComponent,
  },
  {
    path: 'subject/list-grade/:schoolLevelId',
    component: SubjectGradeComponent
  },
  {
    path: 'subject/level/:schoolLevelId/grade/:gradeId',
    component: SubjectClassComponent
  },
  {
    path: 'create-position',
    component: MainPositionComponent,
  },
  {
    path: 'edit-position/:roleId',
    component: MainPositionComponent,
  },
  {
    path: '',
    redirectTo: 'setting',
    pathMatch: 'full',
  },
  
]
