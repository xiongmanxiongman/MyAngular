import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';

const routes: Routes = [{ path: '', component: DynamicComponentLoaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentLoaderRoutingModule { }
