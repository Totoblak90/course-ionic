import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonListPageRoutingModule } from './ion-list-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { IonListPage } from './ion-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonListPageRoutingModule,
    SharedModule
  ],
  declarations: [IonListPage]
})
export class IonListPageModule {}
