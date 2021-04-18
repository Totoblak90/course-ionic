import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder-list',
  templateUrl: './reorder-list.page.html',
  styleUrls: ['./reorder-list.page.scss'],
})
export class ReorderListPage implements OnInit {

  justiceLeague: string[] = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
  JLDisabled = true;
  avengers: string[] = ["Ironman", "Thor", "Hulk", "Black Widow", "Captain America", "Hawk Eye"];
  AvDisabled = true;


  constructor() { }

  ngOnInit() {
  }

  doReorderJL(ev: any) {
    this.justiceLeague = ev.detail.complete(this.justiceLeague);
    console.log(this.justiceLeague)
  }

  shuffleJL() {
    this.JLDisabled = !this.JLDisabled
  }

  doReorderAv(ev: any) {
    this.avengers = ev.detail.complete(this.avengers);
    console.log(this.avengers);
  }
  shuffleAv() {
    this.AvDisabled = !this.AvDisabled
    console.log(this.AvDisabled)
  }


}
