import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, AvatarComponent],
})
export class SharedModule { }
