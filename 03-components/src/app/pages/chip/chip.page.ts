import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
})
export class ChipPage implements OnInit {

  chipList: string[] = [
    "Chip 1",
    "Chip 2",
    "Chip 3",
    "Chip 4",
    "Chip 5"
  ]

  constructor() { }

  ngOnInit() {
  }

}
