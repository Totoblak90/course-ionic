import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  showImage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cardClick() {

    this.showImage = !this.showImage
  }

}
