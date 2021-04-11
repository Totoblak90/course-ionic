import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [
    IonicModule
  ],
  exports: [HeaderComponent, AvatarComponent]
})
export class SharedModule { }
