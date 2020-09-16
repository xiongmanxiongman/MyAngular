import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackTopComponent } from './back-top.component';

const routes: Routes = [{ path: '', component: BackTopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackTopRoutingModule { }
