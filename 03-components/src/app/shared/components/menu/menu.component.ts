import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePageButton } from 'src/app/interfaces/homePageButton.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


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
      name: "List - Sliding",
      path: "/ion-list"
    },
    {
      icon: "reorder-three-outline",
      name: "List - Reorder",
      path: "/reorder-list"
    },
    {
      icon: "reload-outline",
      name: "Ionic Loading",
      path: "/loading"
    },
    {
      icon: "bookmarks-outline",
      name: "Modal",
      path: "/modal"
    },
  ]
  
  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {}

  closeMenu() {
    this.menu.close()
  }

}
