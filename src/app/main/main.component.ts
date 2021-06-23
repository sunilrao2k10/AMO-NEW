import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {UtilService} from '../shared/services/util.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsedEngineComponent } from './used-engine/used-engine.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterViewInit  {
  @ViewChild(UsedEngineComponent)
  usedEngine!: UsedEngineComponent;
  selectedValue = 'requestor';
  activeTab:string='';
  constructor(private utilService:UtilService,private location: Location,private route: ActivatedRoute ) {  }
  setRole(){
    this.utilService.roleSelected.next(this.selectedValue);
    this.utilService.currentRole = this.selectedValue;
    this.utilService.rejectActionType= false;
    this.utilService.quotationCalculated  =false;
  }
  setActiveTab(activeTab:any=''){
    this.activeTab = activeTab;
    this.location.go( '/'+activeTab );    
  }
  ngOnInit(): void {
    this.activeTab = 'usedEngine';
    this.utilService.getQuoteStatus.subscribe((quoteSelected: any) => {
      this.activeTab = 'usedEngine';
      this.ngAfterViewInit();
    })
    this.utilService.actionPerformed.subscribe((status: any) => {
      this.activeTab = 'usedEngine';
      this.selectedValue = 'requestor'
      this.ngAfterViewInit();
    })
    this.utilService.saveQuotationDetail.subscribe((amount: any) => {
       this.activeTab = 'usedEngine';
       this.selectedValue = 'provider';
       this.setActiveTab(this.activeTab)
       this.ngAfterViewInit();
     })
  }
  ngAfterViewInit(){
    this.utilService.currentRole = this.selectedValue;
    this.route.queryParamMap
    .subscribe((params:any='') => {
      let quote='';
      if(params.params.quoteSelected){
        quote= params.params.quoteSelected;
        this.usedEngine.quoteSel = quote;
        this.usedEngine.getQuote();
      }
    });
  }
}
