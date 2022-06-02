import { DemoNgZorroAntdModule } from './../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, DemoNgZorroAntdModule],
  exports: [TableComponent],
})
export class SharedModule {}
