import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { settingRoute } from './setting.routes';
import { PositionSystemComponent } from './setting/position-system/position-system.component';
import { PositionCreateComponent } from './setting/position-system/main-position/position-create/position-create.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { SettingComponent } from './setting/setting.component';
import { SchoolYearComponent } from './setting/school-year/school-year.component';
import { SchoolYearCreateComponent } from './setting/school-year/school-year-create/school-year-create.component';
import { SchoolYearEditComponent } from './setting/school-year/school-year-edit/school-year-edit.component';
import { SubjectComponent } from './setting/subject/subject.component';
import { SubjectLevelComponent } from './setting/subject/subject-level/subject-level.component';
import { SubjectGradeComponent } from './setting/subject/subject-grade/subject-grade.component';
import { SubjectClassComponent } from './setting/subject/subject-class/subject-class.component';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { SubjectCreateComponent } from './setting/subject/subject-create/subject-create.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { MatIconModule } from '@angular/material/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { MainPositionComponent } from './setting/position-system/main-position/main-position.component';
import { PositionEditComponent } from './setting/position-system/main-position/position-edit/position-edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentRoleComponent } from './setting/position-system/main-position/student-role/student-role.component';
import { SchoolRoleComponent } from './setting/position-system/main-position/school-role/school-role.component';
import { SubjectEditComponent } from './setting/subject/subject-edit/subject-edit.component';
import { UserInforComponent } from './setting/user-infor/user-infor.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
@NgModule({
  declarations: [PositionSystemComponent, PositionCreateComponent, SettingComponent, SchoolYearComponent, PositionEditComponent, SchoolYearCreateComponent, SchoolYearEditComponent, SubjectComponent, SubjectLevelComponent, SubjectGradeComponent, SubjectClassComponent, SubjectCreateComponent, MainPositionComponent, StudentRoleComponent, SchoolRoleComponent, SubjectEditComponent, UserInforComponent],
  imports: [
    CommonModule,
    TableBaseModule,
    RouterModule.forChild(settingRoute),
    BaseCardModule,
    MatChipsModule,
    FormsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NzTagModule,
    MatTabsModule,
    MatButtonModule,
    LoaderModule,
    CreateFormModule,
    MatCardModule
  ]
})
export class SettingModule { }
