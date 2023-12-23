import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router, NavigationEnd, NavigationStart} from "@angular/router";
 
@Injectable({ providedIn: "root" })
export class NavigationService {
  private history: string[] = [];
 
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('end',event.url)
        this.history.push(event.urlAfterRedirects);
        this.history = [...new Set(this.history)];
      }
    //   if(event instanceof NavigationStart){
    //     console.log('start',event.url);
    //     this.history.push(event.url);
        // console.log('start history',this.history);
    //   }
    });
  }
 
  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  IsLast(): boolean {
    if (this.history.length > 1) {
     return false
    } else {
      return true;
    }
  }
}