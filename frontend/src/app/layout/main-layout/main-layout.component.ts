import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
import { fader } from 'src/app/utils/animations/fader.animation';
import { lastValueFrom } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private schoolYearService: SchoolYearService,
    private navigation: NavigationService
 ) { }
  showFiller = false;

  current_semester = '';

  back_hide;

  dataNav = {
    list: [
      {
        icon: 'assets/svg/icon-menu-member.svg',
        name: 'Thành viên',
        linkURL: 'member',
        checkRole: null,
        api: "api/class"
      },
      {
        icon: 'assets/svg/icon-menu-schedule.svg',
        name: 'Thời khóa biểu',
        linkURL: 'schedule',
        checkRole: null,
        api: "api/TimeTableLesson"
      },
      {
        icon: 'assets/svg/icon-leave-school.svg',
        name: 'Phòng học',
        linkURL: 'room',
        checkRole: null,
        api: "api/TimeTableLesson"
      },
      {
        icon: 'assets/svg/icon-news.svg',
        name: 'Điểm',
        linkURL: 'gradebook',
        checkRole: null,
        api: "api/gradebook"
      },
      {
        icon: 'assets/svg/icon-setting.svg',
        name: 'Cài đặt',
        linkURL: 'setting',
        checkRole: null,
        api: "api/userprofile"    
      },
    ],
  };

  async ngOnInit(): Promise<void> {
    let test = this.schoolYearService.getCurrentSchoolYear();
    this.back_hide = this.navigation.IsLast();
    const next = await lastValueFrom(test);
    this.current_semester = `Năm học ${next.name} - Học kì ${next.semester.order == 1 ? 'I' : 'II'}`
   }

  back(): void {
    this.navigation.back()
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
