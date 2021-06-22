import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from '../ng-zorro/ng-zorro-antd.module';
import {
  HeaderComponent,
  FooterComponent,
  SubHeaderComponent,
  BaseService,
  SpinnerComponent,
  KeysPipe
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './common/modal/modal.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    SpinnerComponent,
    ModalComponent,
    KeysPipe,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent,
    SpinnerComponent,
    ModalComponent,
    KeysPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [BaseService]
})
export class SharedModule { }
