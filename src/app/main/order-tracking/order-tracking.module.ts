import { OrderTrackingRoutingModule } from './order-tracking.routing';
import { OrderTrackingComponent } from './order-tracking.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroAntdModule } from '../../ng-zorro/ng-zorro-antd.module';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    OrderTrackingComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderTrackingRoutingModule,
    SharedModule,
    NgZorroAntdModule,
  ]
})
export class OrderTrackingModule { }
