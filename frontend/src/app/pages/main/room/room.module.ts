import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { roomRoute } from './room.routes';
import { PositionSystemComponent } from './room/position-system/position-system.component';
import { PositionCreateComponent } from './room/position-system/main-position/position-create/position-create.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { RoomComponent } from './room/room.component';
import { SchoolYearComponent } from './room/school-year/school-year.component';
import { SchoolYearCreateComponent } from './room/school-year/school-year-create/school-year-create.component';
import { SchoolYearEditComponent } from './room/school-year/school-year-edit/school-year-edit.component';
import { SubjectComponent } from './room/subject/subject.component';
import { SubjectLevelComponent } from './room/subject/subject-level/subject-level.component';
import { SubjectGradeComponent } from './room/subject/subject-grade/subject-grade.component';
import { SubjectClassComponent } from './room/subject/subject-class/subject-class.component';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { SubjectCreateComponent } from './room/subject/subject-create/subject-create.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MatIconModule } from '@angular/material/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import { MainPositionComponent } from './room/position-system/main-position/main-position.component';
import { PositionEditComponent } from './room/position-system/main-position/position-edit/position-edit.component';
import { SchoolRoleComponent } from './room/position-system/main-position/school-role/school-role.component';
import { StudentRoleComponent } from './room/position-system/main-position/student-role/student-role.component';
import { SubjectEditComponent } from './room/subject/subject-edit/subject-edit.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { CreateMemberComponent } from './room/create-member/create-member.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';

@NgModule({
  declarations: [PositionSystemComponent, PositionCreateComponent, RoomComponent, SchoolYearComponent, PositionEditComponent, SchoolYearCreateComponent, SchoolYearEditComponent, SubjectComponent, SubjectLevelComponent, SubjectGradeComponent, SubjectClassComponent, SubjectCreateComponent, MainPositionComponent, StudentRoleComponent, SchoolRoleComponent, SubjectEditComponent,CreateMemberComponent,],
  imports: [
    CommonModule,
    TableBaseModule,
    RouterModule.forChild(roomRoute),
    BaseCardModule,
    MatChipsModule,
    FormsModule,
    CreateFormModule,
    MatIconModule,
    LoaderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NzTagModule,
    MatTabsModule
  ]
})
export class RoomModule { }
