import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoaderRoutingModule } from './dynamic-component-loader-routing.module';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';


@NgModule({
  declarations: [DynamicComponentLoaderComponent],
  imports: [
    CommonModule,
    DynamicComponentLoaderRoutingModule
  ]
})
export class DynamicComponentLoaderModule { }
