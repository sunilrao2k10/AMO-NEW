import { UsedEngineRoutingModule } from './used-engine.routing';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroAntdModule } from '../../ng-zorro/ng-zorro-antd.module';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import {
  QuoteRequestComponent, UsedEngineComponent,
  QuoteIssueComponent,
  ENConfirmationComponent,
  EngineDemandRequestComponent,
  BillingComponent,
  UsedEngineService
} from './index';
import { provideRoutes } from '@angular/router';
registerLocaleData(en);
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
  providers: [{ provide: NZ_I18N, useValue: en_US }, UsedEngineService]
})
export class UsedEngineModule {

 }
