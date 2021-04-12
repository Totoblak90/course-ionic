import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePageRoutingModule } from './date-time-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { DateTimePage } from './date-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePageRoutingModule,
    SharedModule
  ],
  declarations: [DateTimePage]
})
export class DateTimePageModule {}
