import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(mainRoutes),
    LayoutModule,
  ],
  providers: [SchoolYearService],
})
export class MainModule {}
