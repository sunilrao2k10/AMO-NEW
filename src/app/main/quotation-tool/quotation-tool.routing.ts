import { QuotationCalculationComponent } from './quotation-calculation/quotation-calculation.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const  QuotationTool: Routes = [
    { path: '', component: QuotationCalculationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(QuotationTool)],
    exports: [RouterModule]
  })
export class QuotationToolRoutingModule { }

