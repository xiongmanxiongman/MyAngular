import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserInputComponent} from './user-input.component';

const routes: Routes = [{path: '', component: UserInputComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInputRoutingModule {
}
