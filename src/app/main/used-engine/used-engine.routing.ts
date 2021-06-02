import { UsedEngineComponent } from './used-engine.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const UsedEngine: Routes = [
    { path: '', component: UsedEngineComponent },
];

@NgModule({
    imports: [RouterModule.forChild(UsedEngine)],
    exports: [RouterModule]
  })
  export class UsedEngineRoutingModule { }

