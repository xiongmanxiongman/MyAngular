import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkeletonRoutingModule } from './skeleton-routing.module';
import { SkeletonComponent } from './skeleton.component';


@NgModule({
  declarations: [SkeletonComponent],
  imports: [
    CommonModule,
    SkeletonRoutingModule
  ]
})
export class SkeletonModule { }
