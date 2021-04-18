import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(
    public loadingController: LoadingController
  ) { }

  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message
    });
    await this.loading.present();


  }

  ngOnInit() {
  }

  showLoading() {

    this.presentLoading('Please wait...')

    setTimeout(() => {
      this.loading.dismiss()
      console.log('Loading dismissed!');
    }, 2000 )

  }
}
