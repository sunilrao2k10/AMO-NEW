import { filter } from 'rxjs/operators';
import { GlobalService } from './../../../global.service';
import { BaseService } from './../../services/base/base.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() routerActiveTab: any;
  selectedRole: any = 'requestor';
  constructor(
    private router: Router,
    private baseService: BaseService,
    private globalService: GlobalService
    ) {
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
