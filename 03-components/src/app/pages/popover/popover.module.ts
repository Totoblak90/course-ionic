import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { PopoverPage } from './popover.page';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    SharedModule
  ],
  declarations: [PopoverPage, PopoverInfoComponent]
})
export class PopoverPageModule {}
