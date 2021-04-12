import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPageRoutingModule,
    SharedModule
  ],
  declarations: [CheckPage]
})
export class CheckPageModule {}
