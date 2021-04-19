import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  data: number;

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  openPopover( event ) {
    this.presentPopover(event)
  }

  async presentPopover (ev: any) {
  
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    })

    await popover.present();
    // const resp =  await popover.onDidDismiss();
    const { data } =  await popover.onDidDismiss();
    
    this.data = data.value
  }
}
