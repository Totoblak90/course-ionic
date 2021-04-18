import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderListPageRoutingModule } from './reorder-list-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ReorderListPage } from './reorder-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderListPageRoutingModule,
    SharedModule
  ],
  declarations: [ReorderListPage]
})
export class ReorderListPageModule {}
