import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPageRoutingModule } from './grid-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { GridPage } from './grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPageRoutingModule,
    SharedModule
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
