import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() text: string = "";
  @Input() color: string = "primary";
  @Input() heartButtonCondition: boolean = false;
  @Input() popoverCondition: boolean = false;
  @Input() searchbar: boolean = false;

  @Output() presentPop: EventEmitter<any> = new EventEmitter()
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter()

  favorito: boolean = false;


  constructor() { }

  ngOnInit() {}

  heartButtonClick() {
    this.favorito = !this.favorito;
  }

  popoverClick( event) {
    this.presentPop.emit( event )
  }

  onSearch( event ) {

    this.onSearchChange.emit( event )
  }

}
