import { OrderTrackingComponent } from './order-tracking.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const  OrderTracking: Routes = [
    { path: '', component: OrderTrackingComponent },
];

@NgModule({
    imports: [RouterModule.forChild(OrderTracking)],
    exports: [RouterModule]
  })
  export class OrderTrackingRoutingModule { }

