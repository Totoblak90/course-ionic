import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChipPageRoutingModule } from './chip-routing.module';

import { ChipPage } from './chip.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipPageRoutingModule,
    SharedModule
  ],
  declarations: [ChipPage]
})
export class ChipPageModule {}
