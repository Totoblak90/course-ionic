import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  itemList: any[] = Array(40)

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  closePopover( value: number) {
    this.popoverController.dismiss({
      value
    });
  }

}
