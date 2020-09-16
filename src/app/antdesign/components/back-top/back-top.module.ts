import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackTopRoutingModule } from './back-top-routing.module';
import { BackTopComponent } from './back-top.component';


@NgModule({
  declarations: [BackTopComponent],
  imports: [
    CommonModule,
    BackTopRoutingModule
  ]
})
export class BackTopModule { }
