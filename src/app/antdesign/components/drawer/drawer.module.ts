import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerRoutingModule } from './drawer-routing.module';
import { DrawerComponent } from './drawer.component';


@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    DrawerRoutingModule
  ]
})
export class DrawerModule { }
