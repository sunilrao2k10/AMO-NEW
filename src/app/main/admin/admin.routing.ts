import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const  AdminRoute: Routes = [
    { path: '', component: AdminComponent },
];

@NgModule({
    imports: [RouterModule.forChild(AdminRoute)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }

