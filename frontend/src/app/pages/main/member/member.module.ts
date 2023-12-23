import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { memberRoute } from './member.routes';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { MemberHomeComponent } from './components/member-levelGradeClass/member-list-level/member-home.component';
import { MemberDetailComponent } from './components/member-list-table/member-list-table.component';
import { MemberHomeGroupComponent } from './components/member-levelGradeClass/member-list-grade/member-home-group.component';
import { MemberHomeClassComponent } from './components/member-levelGradeClass/member-list-class/member-home-class.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { SchoolGroupMemberComponent } from './components/member-levelGradeClass/school-group-member/school-group-member.component';
import { ClassCreateComponent } from './components/member-levelGradeClass/class-create/class-create.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { SchoolGroupAdminComponent } from './components/school-group-admin/school-group-admin.component';
import { CreateTeacherComponent } from './components/teacher/create-teacher/create-teacher.component';
import { ImportStudentComponent } from './components/import-student/import-student.component';
import { EditTeacherComponent } from './components/teacher/edit-teacher/edit-teacher.component';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { AddEmployeeComponent } from './components/school-group-admin/add-employee/add-employee.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { MemberRoleDetailComponent } from './components/member-role-detail/member-role-detail.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ImportEmployeeComponent } from './components/employee/import-employee/import-employee.component';

@NgModule({
  declarations: [
    MemberComponent,
    MemberHomeComponent,
    MemberDetailComponent,
    MemberHomeGroupComponent,
    MemberHomeClassComponent,
    CreateMemberComponent,
    EditMemberComponent,
    SchoolGroupMemberComponent,
    ClassCreateComponent,
    TeacherComponent,
    SchoolGroupAdminComponent,
    CreateTeacherComponent,
    ImportStudentComponent,
    EditTeacherComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    AddEmployeeComponent,
    EmployeeEditComponent,
    MemberRoleDetailComponent,
    ImportEmployeeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(memberRoute),
    CreateFormModule,
    LoaderModule,
    MatProgressSpinnerModule,
    MatListModule,
    BaseCardModule,
    FormsModule,
    MatDialogModule,
    TableBaseModule,
  ],
  exports: [MemberComponent],
})
export class MemberModule {}
