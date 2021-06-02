import { DataManagementComponent } from './../data-management/data-management.component';
import { GlobalService } from './../../global.service';
import { BaseService } from './../../shared/services/base/base.service';
import { AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-used-engine',
  templateUrl: './used-engine.component.html',
})
export class UsedEngineComponent implements OnInit {
  roleDataSubscription: any;
  selectedQuoteID = 'Select Quote ID';
  quoteIdList = [];
  panels = null;
  // accordionDetail: any = {};
  response: any = {};
  roleName = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private globalService: GlobalService
    ) {
    this.roleDataSource();
    route.queryParams
      .subscribe(params => {
        const quoteID = params.quoteID;
        if (quoteID){
          this.selectedQuoteID = quoteID;
          this.selectQuoteId(quoteID);
        }
      }
    );
  }

  ngOnInit(): void {
    this.quoteIdCollection();
  }

  roleDataSource(): void{
    this.globalService.roleDataSource$.subscribe((data: any) => {
      this.response = data;
      this.panels = data.panel;
      this.roleName = data.role;
      this.selectedQuoteID = 'Select Quote ID';
    });
  }

  quoteIdCollection(): void{
    this.baseService.selectedQuteID().subscribe(data => {
      this.quoteIdList = data.quoteIdCollection;
    });
  }

  selectQuoteId(value: any): void{
    this.globalService.quoteIdUpdate(value);
    // if (value === '3333'){
    //   this.baseService.quoteIDData().subscribe(data => {
    //     this.panels = data.panel;
    //     this.accordionDataValue(data);
    //   });
    // }
    if (value === '1000' && this.roleName === 'usedEngineRequestor'){
      this.baseService.quoteIDDataShiped('pending').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '1000' && this.roleName === 'usedEngineProvider'){
      this.baseService.quoteIDDataShiped('pendingProvider').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    }
    if (value === '1111' && this.roleName === 'usedEngineRequestor'){
      this.baseService.quoteIDDataShiped('approve').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '1111' && this.roleName === 'usedEngineProvider'){
      this.baseService.quoteIDDataShiped('approveProvider').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '2222' && this.roleName === 'usedEngineRequestor'){
      this.baseService.quoteIDDataShiped('send').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '2222' && this.roleName === 'usedEngineProvider'){
      this.baseService.quoteIDDataShiped('sendProvider').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '3333' && this.roleName === 'usedEngineRequestor'){
      this.baseService.quoteIDDataShiped('reject').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '3333' && this.roleName === 'usedEngineProvider'){
      this.baseService.quoteIDDataShiped('rejectProvider').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '4444' && this.roleName === 'usedEngineRequestor'){
      this.baseService.quoteIDDataShiped('pending').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    } else if (value === '4444' && this.roleName === 'usedEngineProvider'){
      this.baseService.quoteIDDataShiped('pendingProviderQuotationMsg').subscribe(data => {
        this.response = Object.assign({}, data, {role: this.roleName});
        this.panels = data.panel;
      });
    }
  }

  // accordionDataValue(response: any): void {
  //   //console.log(this.roleName);
  //   this.accordionDetail = response.panel.reduce((accum: any, value: any) => {
  //     value = Object.assign(value, {role: this.roleName});
  //     return {...accum, [value.code] : value || {}};
  //   }, {});
  //   //  console.log(this.accordionDetail);
  // }
  // selcteAccordion(event: any): void{
  //   htis.steper.forEach((element: any) => {
  //     if (element.name === event.target.value){
  //       element.active = true;
  //     } else {
  //       element.active = false;
  //     }
  //   });
  //   console.log(event.target.value);
  // }

}
