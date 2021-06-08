import { UsedEngineService } from './services/used-engine.service';
import { GlobalService } from './../../global.service';
import { BaseService } from './../../shared/services/base/base.service';
import { Component, OnInit} from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as global from './panels';

@Component({
  selector: 'app-used-engine',
  templateUrl: './used-engine.component.html',
})
export class UsedEngineComponent implements OnInit {
  roleDataSubscription: any;
  selectedQuoteID = 'Select Quote ID';
  quoteIdList: any[] = [];
  panelDefaultValue: any[] = global.PanelName;
  stepName = global.stepName;
  panels: any[] = [];
  response: any = {};
  roleName = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseService: BaseService,
    private usedEnginService: UsedEngineService,
    private globalService: GlobalService,
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
    this.createDefaultPanels();
  }

  createDefaultPanels(): void{
    this.panels = this.panelDefaultValue.map((item: any) => {
        item.disabled = item.code === 'QR' && this.roleName === 'requestor' ? false : true;
        return item;
    });
    console.log(this.panels);
  }

  roleDataSource(): void{
    this.globalService.roleDataSource$.subscribe((data: any) => {
      this.roleName = data;
      this.selectedQuoteID = 'Select Quote ID';
      this.createDefaultPanels();
    });
  }

  quoteIdCollection(): void{
    this.baseService.selectedQuteID().subscribe(data => {
      this.quoteIdList = data.quoteIdCollection;
    });
  }

  selectQuoteId(value: any): void{
    if (value === 'Select Quote ID') {
      this.createDefaultPanels();
    }
    if (value === '1000' && this.roleName === 'requestor'){
      this.baseService.quoteIDDataShiped('pending').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '1000' && this.roleName === 'provider'){
      this.baseService.quoteIDDataShiped('pendingProvider').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    }
    if (value === '1111' && this.roleName === 'requestor'){
      this.baseService.quoteIDDataShiped('approve').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '1111' && this.roleName === 'provider'){
      this.baseService.quoteIDDataShiped('approveProvider').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '2222' && this.roleName === 'requestor'){
      this.baseService.quoteIDDataShiped('send').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '2222' && this.roleName === 'provider'){
      this.baseService.quoteIDDataShiped('sendProvider').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '3333' && this.roleName === 'requestor'){
      this.baseService.quoteIDDataShiped('reject').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '3333' && this.roleName === 'provider'){
      this.baseService.quoteIDDataShiped('rejectProvider').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '4444' && this.roleName === 'requestor'){
      this.baseService.quoteIDDataShiped('pending').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    } else if (value === '4444' && this.roleName === 'provider'){
      this.baseService.quoteIDDataShiped('pendingProviderQuotationMsg').subscribe(data => {
        this.response = data.data;
        this.activeStep(this.response);
        this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
      });
    }
  }

  formData(event: any): void{
    const data = event;
    this.panels = this.usedEnginService.usedEngineCase(this.panelDefaultValue, data); // data.panel;
  }

  activeStep(data: any): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.stepName.length; i++){
      if (data.currentQueue !== this.stepName[i].name){
        this.stepName[i].submited = true;
      } else {
        this.stepName[i].submited = false;
        break;
      }
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
