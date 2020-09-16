import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentStylesComponent } from './component-styles.component';

const routes: Routes = [{ path: '', component: ComponentStylesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStylesRoutingModule { }
