import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-and-range',
  templateUrl: './progress-and-range.page.html',
  styleUrls: ['./progress-and-range.page.scss'],
})
export class ProgressAndRangePage implements OnInit {

  progress: number = 0.00;
  constructor() { }

  ngOnInit() {
  }

  rangeChange( event: any ) {
    this.progress = event.detail.value / 100
  }

}
