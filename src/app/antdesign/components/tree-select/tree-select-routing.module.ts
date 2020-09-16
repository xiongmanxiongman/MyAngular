import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeSelectComponent } from './tree-select.component';

const routes: Routes = [{ path: '', component: TreeSelectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeSelectRoutingModule { }
