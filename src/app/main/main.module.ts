import { DataManagementComponent } from './data-management/data-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';

import {
  QuoteRequestComponent, UsedEngineComponent,
  QuoteIssueComponent,
  OrderTrackingComponent,
  EngineDemandRequestComponent,
  PnConfirmationComponent,
  BillingComponent,
  QuotationToolComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    QuoteRequestComponent,
    UsedEngineComponent,
    QuoteIssueComponent,
    OrderTrackingComponent,
    EngineDemandRequestComponent,
    PnConfirmationComponent,
    BillingComponent,
    DataManagementComponent,
    QuotationToolComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
