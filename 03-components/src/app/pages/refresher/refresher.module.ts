import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherPageRoutingModule } from './refresher-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { RefresherPage } from './refresher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherPageRoutingModule,
    SharedModule
  ],
  declarations: [RefresherPage]
})
export class RefresherPageModule {}
