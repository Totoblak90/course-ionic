import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { IonicModule } from '@ionic/angular';
import { NewComponent } from './components/news/new/new.component';



@NgModule({
  declarations: [NewsComponent, NewComponent],
  exports: [NewsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
