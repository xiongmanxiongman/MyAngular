import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStylesRoutingModule } from './component-styles-routing.module';
import { ComponentStylesComponent } from './component-styles.component';


@NgModule({
  declarations: [ComponentStylesComponent],
  imports: [
    CommonModule,
    ComponentStylesRoutingModule
  ]
})
export class ComponentStylesModule { }
