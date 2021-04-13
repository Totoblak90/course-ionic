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
    {
      icon: "radio-button-off-outline",
      name: "Button",
      path: "/button"
    },
    {
      icon: "card-outline",
      name: "Cards",
      path: "/card"
    },
    {
      icon: "checkmark-done-outline",
      name: "Checkbox",
      path: "/check"
    },
    {
      icon: "calendar-outline",
      name: "Date/Time",
      path: "/date-time"
    },
    {
      icon: "car-outline",
      name: "Fab",
      path: "/fab"
    },
    {
      icon: "grid-outline",
      name: "Grid",
      path: "/grid"
    },
    {
      icon: "infinite-outline",
      name: "Infinite Scroll",
      path: "/infinite-scroll"
    },
    {
      icon: "hammer-outline",
      name: "Input Forms",
      path: "/input"
    },
    {
      icon: "list-outline",
      name: "Ion List",
      path: "/ion-list"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
