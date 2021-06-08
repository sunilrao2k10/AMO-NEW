import { UsedEngineRoutingModule } from './used-engine.routing';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroAntdModule } from '../../ng-zorro/ng-zorro-antd.module';
import {
  QuoteRequestComponent, UsedEngineComponent,
  QuoteIssueComponent,
  ENConfirmationComponent,
  EngineDemandRequestComponent,
  BillingComponent,
  UsedEngineService
} from './index';
import { provideRoutes } from '@angular/router';

@NgModule({
  declarations: [
    QuoteRequestComponent,
    UsedEngineComponent,
    QuoteIssueComponent,
    EngineDemandRequestComponent,
    ENConfirmationComponent,
    BillingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsedEngineRoutingModule,
    SharedModule,
    NgZorroAntdModule,
  ],
  providers: [UsedEngineService]
})
export class UsedEngineModule {

 }
