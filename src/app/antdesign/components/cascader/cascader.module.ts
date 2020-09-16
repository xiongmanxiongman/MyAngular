import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CascaderRoutingModule } from './cascader-routing.module';
import { CascaderComponent } from './cascader.component';


@NgModule({
  declarations: [CascaderComponent],
  imports: [
    CommonModule,
    CascaderRoutingModule
  ]
})
export class CascaderModule { }
