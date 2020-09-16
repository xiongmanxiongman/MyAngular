import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayingDataComponent } from './displaying-data.component';


const routes: Routes = [
  {
    path: '',
    component: DisplayingDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayingDataRoutingModule { }
