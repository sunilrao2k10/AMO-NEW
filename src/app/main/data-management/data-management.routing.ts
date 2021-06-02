import { DataManagementComponent } from './data-management.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const  DataManagement: Routes = [
    { path: '', component: DataManagementComponent },
];

@NgModule({
    imports: [RouterModule.forChild(DataManagement)],
    exports: [RouterModule]
  })
export class DataManagementRoutingModule { }

