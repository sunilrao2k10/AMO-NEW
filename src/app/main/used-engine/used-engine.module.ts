import { UsedEngineRoutingModule } from './used-engine.routing';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroAntdModule } from '../../ng-zorro/ng-zorro-antd.module';
import {
  QuoteRequestComponent, UsedEngineComponent,
  QuoteIssueComponent,
  PNConfirmationComponent,
  EngineDemandRequestComponent,
  BillingComponent,
} from './index';

@NgModule({
  declarations: [
    QuoteRequestComponent,
    UsedEngineComponent,
    QuoteIssueComponent,
    EngineDemandRequestComponent,
    PNConfirmationComponent,
    BillingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsedEngineRoutingModule,
    SharedModule,
    NgZorroAntdModule,
  ]
})
export class UsedEngineModule {

 }
