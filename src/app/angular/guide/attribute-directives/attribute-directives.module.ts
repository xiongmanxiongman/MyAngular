import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectivesRoutingModule } from './attribute-directives-routing.module';
import { AttributeDirectivesComponent } from './attribute-directives.component';


@NgModule({
  declarations: [AttributeDirectivesComponent],
  imports: [
    CommonModule,
    AttributeDirectivesRoutingModule
  ]
})
export class AttributeDirectivesModule { }
