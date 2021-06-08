import { filter } from 'rxjs/operators';
import { GlobalService } from './../../../global.service';
import { BaseService } from './../../services/base/base.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  selectedRole: any = 'requestor';
  routerActiveTab = '';
  constructor(
    private router: Router,
    private baseService: BaseService,
    private globalService: GlobalService
    ) {
      router.events.subscribe((routerEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          const currentTree = router.url.substring(1).split('?');
          this.routerActiveTab = currentTree[0];
        }
      });
     }

  ngOnInit(): void {
    this.selectRole();
    // this.router.navigateByUrl('used-engine');

  }

  navigation(value: string): void{
    this.routerActiveTab = value;
    this.router.navigateByUrl(value);
  }

  selectRole(option?: any): void{
    this.globalService.roleDataUpdated(this.selectedRole);
    // this.baseService.selectedRole().subscribe((data) => {
    //   this.globalService.roleDataUpdated(data);
    // });
    if (option){
      this.router.navigateByUrl('used-engine');
    }
  }

}
