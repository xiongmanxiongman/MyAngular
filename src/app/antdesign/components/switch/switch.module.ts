import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchRoutingModule } from './switch-routing.module';
import { SwitchComponent } from './switch.component';


@NgModule({
  declarations: [SwitchComponent],
  imports: [
    CommonModule,
    SwitchRoutingModule
  ]
})
export class SwitchModule { }
