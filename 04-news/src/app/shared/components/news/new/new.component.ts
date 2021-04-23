import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../interfaces/news.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SaveLocalDataService } from '../../../services/save-local-data.service';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() new: Article;
  @Input() i: number;
  @Input() onFavTab: boolean;


  constructor(
    private iab: InAppBrowser,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private saveLocalDataService: SaveLocalDataService,
  ) { }

  ngOnInit() {}

  openFullNew() {
    const browser = this.iab.create(this.new.url, '_system');
  }
  openMenu() {
    this.presentActionSheet();
  }


  async presentActionSheet() {

    let toggleFavourite;

    if ( this.onFavTab ) {
      toggleFavourite = {
        text: 'Delete favourite',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.saveLocalDataService.deleteFavourite( this.new );
        }
      };
    } else {
      toggleFavourite = {
        text: 'Favourite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.saveLocalDataService.saveFavourite( this.new );
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      buttons: [
        toggleFavourite,
      {
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          this.socialSharing.share(
            this.new.title,
            this.new.source.name,
            '',
            this.new.url);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
