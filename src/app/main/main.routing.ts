import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';


const MainRoutes: Routes = [
    { path: '', component: MainComponent },
];

@NgModule({
    imports: [RouterModule.forChild(MainRoutes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }

