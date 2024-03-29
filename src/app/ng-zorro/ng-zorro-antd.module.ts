
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
@NgModule({
  exports: [
    NzTableModule,
    NzCollapseModule,
    NzSelectModule,
    NzDatePickerModule
  ]
})
export class NgZorroAntdModule {

}
