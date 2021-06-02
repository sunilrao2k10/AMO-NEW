import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AMO';
  loaded = false;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loaded = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loaded = false;
      }
    });
  }

}
