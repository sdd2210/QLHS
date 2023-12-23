import { Routes } from "@angular/router";
import { MainPositionComponent } from "./room/position-system/main-position/main-position.component";
import { PositionCreateComponent } from "./room/position-system/main-position/position-create/position-create.component";
import { PositionEditComponent } from "./room/position-system/main-position/position-edit/position-edit.component";
import { PositionSystemComponent } from "./room/position-system/position-system.component";
import { SchoolYearComponent } from "./room/school-year/school-year.component";
import { RoomComponent } from "./room/room.component";
import { SubjectClassComponent } from "./room/subject/subject-class/subject-class.component";
import { SubjectGradeComponent } from "./room/subject/subject-grade/subject-grade.component";
import { SubjectLevelComponent } from "./room/subject/subject-level/subject-level.component";
import { SubjectComponent } from "./room/subject/subject.component";


export const roomRoute: Routes = [
  {
    path: '',
    component: RoomComponent,
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
    redirectTo: 'room',
    pathMatch: 'full',
  },
  
]
