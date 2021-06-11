import { GlobalService } from 'src/app/global.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AMO';
  loading = false;
  constructor(private router: Router, private http: HttpClient, private globalService: GlobalService) {
    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.loading = false;
      }
    });
    this.loader();
  }

  ngOnInit(): void{

  }

  loader(): void{
    this.globalService.loader$.subscribe((data: any) => {
      this.loading = data;
    });
  }

  test(): void{
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => console.log(data));
  }

}
