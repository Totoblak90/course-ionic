import { Component, Input, OnInit } from '@angular/core';

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

  favorito: boolean = false;


  constructor() { }

  ngOnInit() {}

  heartButtonClick() {
    this.favorito = !this.favorito;
  }

}
