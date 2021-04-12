import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  customPickerOptions = {
    buttons: [
      {
        text: 'Console',
        handler: ( event ) => {
          console.log( event )
        }
      },
      {
        text: 'Exit',
        handler: () => console.log('Chiao!')
      }
    ]
  };

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  fechaElegida!: Date;

  constructor() { }

  ngOnInit() {
  }

  fechaEstablecida( event ) {

    this.fechaElegida = new Date ( event.detail.value );
    console.log(this.fechaElegida)
  }



}
