import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XmRoutingModule } from './xm-routing.module';
import { XmComponent } from './xm.component';


@NgModule({
  declarations: [XmComponent],
  imports: [
    CommonModule,
    XmRoutingModule
  ]
})
export class XmModule { }
