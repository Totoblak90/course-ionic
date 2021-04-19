import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressAndRangePageRoutingModule } from './progress-and-range-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ProgressAndRangePage } from './progress-and-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressAndRangePageRoutingModule,
    SharedModule
  ],
  declarations: [ProgressAndRangePage]
})
export class ProgressAndRangePageModule {}
