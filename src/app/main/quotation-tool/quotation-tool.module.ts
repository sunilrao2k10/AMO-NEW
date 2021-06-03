import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuotationToolRoutingModule } from './quotation-tool.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationCalculationComponent } from './quotation-calculation/quotation-calculation.component';

@NgModule({
  declarations: [
    QuotationCalculationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    QuotationToolRoutingModule
  ]
})
export class QuotationToolModule { }
