import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  HeaderComponent,
  FooterComponent,
  SubHeaderComponent,
  BaseService,
  SpinnerComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './common/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    SpinnerComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    SpinnerComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BaseService]
})
export class SharedModule { }
