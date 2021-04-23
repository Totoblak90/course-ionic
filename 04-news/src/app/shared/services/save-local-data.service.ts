import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Article } from '../interfaces/news.interface';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class SaveLocalDataService {

  news: Article[] = [];

  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.loadFavouriteList();
   }

  saveFavourite( singleNew: Article ) {

    const exists = this.news.find( n => n.title === singleNew.title);

    if (!exists) {
      this.news.unshift(singleNew);
      this.storage.set('Favourites', this.news);
    }
    this.presentToast('Saved on favourites!');

  }
  async loadFavouriteList() {

    const favList = await this.storage.get('Favourites');

    if (favList !== null) {
      this.news = favList;
    };
  }

  deleteFavourite( singleNew: Article ) {
    this.news = this.news.filter( n => n.title !== singleNew.title );
    this.storage.set('Favourites', this.news);
    this.presentToast('Deleted');
  }

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1200
    });
    toast.present();
  }

}
