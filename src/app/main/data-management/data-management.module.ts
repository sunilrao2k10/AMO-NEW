import { DataManagementRoutingModule } from './data-management.routing';
import { DataManagementComponent } from './data-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroAntdModule } from '../../ng-zorro/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgZorroAntdModule,
    DataManagementRoutingModule
  ]
})
export class DataManagementModule { }
