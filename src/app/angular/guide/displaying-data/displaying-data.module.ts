import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayingDataRoutingModule } from './displaying-data-routing.module';
import { DisplayingDataComponent } from './displaying-data.component';

@NgModule({
  imports: [
    CommonModule,
    DisplayingDataRoutingModule
  ],
  declarations: [DisplayingDataComponent]
})
export class DisplayingDataModule { }
