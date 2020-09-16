import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeSelectRoutingModule } from './tree-select-routing.module';
import { TreeSelectComponent } from './tree-select.component';


@NgModule({
  declarations: [TreeSelectComponent],
  imports: [
    CommonModule,
    TreeSelectRoutingModule
  ]
})
export class TreeSelectModule { }
