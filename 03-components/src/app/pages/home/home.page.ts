import { Component, OnInit } from '@angular/core';
import { HomePageButton } from '../../interfaces/homePageButton.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  buttonList: HomePageButton[] = [
    {
      icon: "apps-outline",
      name: "Action Sheet",
      path: "/action-sheet"
    },
    {
      icon: "alert-circle-outline",
      name: "Alert",
      path: "/alert"
    },
    {
      icon: "image-outline",
      name: "Chip",
      path: "/chip"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
