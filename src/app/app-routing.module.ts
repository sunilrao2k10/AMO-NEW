
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/used-engine/used-engine.module').then(m => m.UsedEngineModule)
  },
  {
    path: 'used-engine/:quoteID',
    loadChildren: () => import('./main/used-engine/used-engine.module').then(m => m.UsedEngineModule)
  },
  {
    path: 'used-engine',
    loadChildren: () => import('./main/used-engine/used-engine.module').then(m => m.UsedEngineModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('./main/order-tracking/order-tracking.module').then(m => m.OrderTrackingModule)
  },
  {
    path: 'data-management',
    loadChildren: () => import('./main/data-management/data-management.module').then(m => m.DataManagementModule)
  },
  {
    path: 'quotation-tool',
    loadChildren: () => import('./main/quotation-tool/quotation-tool.module').then(m => m.QuotationToolModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
