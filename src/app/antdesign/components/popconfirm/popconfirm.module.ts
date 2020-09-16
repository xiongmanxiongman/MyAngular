import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopconfirmRoutingModule } from './popconfirm-routing.module';
import { PopconfirmComponent } from './popconfirm.component';


@NgModule({
  declarations: [PopconfirmComponent],
  imports: [
    CommonModule,
    PopconfirmRoutingModule
  ]
})
export class PopconfirmModule { }
