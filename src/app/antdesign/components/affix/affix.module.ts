import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffixRoutingModule } from './affix-routing.module';
import { AffixComponent } from './affix.component';


@NgModule({
  declarations: [AffixComponent],
  imports: [
    CommonModule,
    AffixRoutingModule
  ]
})
export class AffixModule { }
