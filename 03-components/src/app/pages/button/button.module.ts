import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonPageRoutingModule } from './button-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ButtonPage } from './button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonPageRoutingModule,
    SharedModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule {}
