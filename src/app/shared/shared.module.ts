import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { TableFilterPipe } from './pipes/filter.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [DrawerComponent, TableFilterPipe],
  imports: [CommonModule, NgxChartsModule],
  exports: [DrawerComponent, CommonModule, TableFilterPipe, NgxChartsModule],
})
export class SharedModule {}
