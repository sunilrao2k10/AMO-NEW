
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
@NgModule({
  exports: [
    NzTableModule,
    NzCollapseModule,
    NzSelectModule,
    NzModalModule
  ]
})
export class NgZorroAntdModule {

}
