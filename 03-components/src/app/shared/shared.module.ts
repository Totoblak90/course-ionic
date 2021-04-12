import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [HeaderComponent, AvatarComponent]
})
export class SharedModule { }
