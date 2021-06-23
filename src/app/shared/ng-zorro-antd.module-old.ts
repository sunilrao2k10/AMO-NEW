
import { NgModule } from '@angular/core';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  exports: [
    NzTableModule,
    NzCollapseModule,
    NzSelectModule,
  ]
})
export class NgZorroAntdModule {

}
