import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { ScheduleGroupDetailComponent } from './schedule-levelGradeClass/schedule-list-class/schedule-group-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleComponent } from './schedule.component';
import { scheduleRoute } from './schedule.routes';
import { ImportScheduleComponent } from './import-schedule/import-schedule.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleGroupComponent } from './schedule-levelGradeClass/schedule-list-grade/schedule-group.component';
import { ScheduleLevelComponent } from './schedule-levelGradeClass/schedule-list-level/schedule-level.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';


@NgModule({
    declarations: [ScheduleComponent, ScheduleGroupDetailComponent, ScheduleListComponent, ScheduleGroupComponent, ImportScheduleComponent, CreateScheduleComponent, ScheduleLevelComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoaderModule,
        RouterModule.forChild(scheduleRoute),
        BaseCardModule,
        CreateFormModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    exports: [ScheduleComponent]
})
export class ScheduleModule { }
