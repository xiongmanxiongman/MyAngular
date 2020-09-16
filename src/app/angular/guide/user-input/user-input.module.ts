import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './keyup.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopbackComponent } from './loop-back.component';
import {UserInputRoutingModule} from './user-input-routing.module';
import {UserInputComponent} from './user-input.component';


@NgModule({
  declarations: [
    UserInputComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent
  ],
  imports: [
    CommonModule,
    UserInputRoutingModule
  ]
})
export class UserInputModule {
}
