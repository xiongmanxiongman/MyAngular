import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderRoutingModule } from './page-header-routing.module';
import { PageHeaderComponent } from './page-header.component';


@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    PageHeaderRoutingModule
  ]
})
export class PageHeaderModule { }
