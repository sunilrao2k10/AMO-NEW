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
  selectedRole: any = 'usedEngineRequestor';
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
    this.selectRole({target: {value : 'usedEngineRequestor'}});
  }

  navigation(value: string): void{
    this.routerActiveTab = value;
    this.router.navigateByUrl(value);
  }

  selectRole(event: any, option?: any): void{
    this.selectedRole = event.target.value;
    this.baseService.selectedRole().subscribe((data) => {
      // for testing
      data.panel = data.panel.filter((item: any) => {
        if (this.selectedRole === 'usedEngineRequestor' || this.selectedRole === 'usedEngineBiller'){
          return item.code === 'QR' || item.code === 'EDR';
        } else {
          return item;
        }
      });
      data.role = this.selectedRole;
      // for testing end
      console.log(data);
      this.globalService.roleDataUpdated(data);
    });
    if (option){
      this.router.navigateByUrl('used-engine');
    }
  }

}
