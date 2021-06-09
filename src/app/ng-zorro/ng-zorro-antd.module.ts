
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  exports: [
    NzTableModule,
    NzCollapseModule,
    NzSelectModule,
    NzIconModule
  ]
})
export class NgZorroAntdModule {

}
