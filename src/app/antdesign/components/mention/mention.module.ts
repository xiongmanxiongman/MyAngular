import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentionRoutingModule } from './mention-routing.module';
import { MentionComponent } from './mention.component';


@NgModule({
  declarations: [MentionComponent],
  imports: [
    CommonModule,
    MentionRoutingModule
  ]
})
export class MentionModule { }
