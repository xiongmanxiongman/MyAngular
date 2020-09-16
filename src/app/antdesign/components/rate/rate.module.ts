import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate.component';


@NgModule({
  declarations: [RateComponent],
  imports: [
    CommonModule,
    RateRoutingModule
  ]
})
export class RateModule { }
