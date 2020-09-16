import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinRoutingModule } from './spin-routing.module';
import { SpinComponent } from './spin.component';


@NgModule({
  declarations: [SpinComponent],
  imports: [
    CommonModule,
    SpinRoutingModule
  ]
})
export class SpinModule { }
