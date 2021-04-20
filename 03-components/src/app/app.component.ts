import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomePageButton } from './interfaces/homePageButton.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
      icon: "tablet-portrait-outline",
      name: "Modal",
      path: "/modal"
    },
    {
      icon: "phone-portrait-outline",
      name: "Popover",
      path: "/popover"
    },
    {
      icon: "code-working-outline",
      name: "Progress bar and Range",
      path: "/progress-and-range"
    },
    {
      icon: "arrow-down-circle-outline",
      name: "Refresher",
      path: "/refresher"
    },
    {
      icon: "search-outline",
      name: "Searchbar",
      path: "/search"
    },
    {
      icon: "copy-outline",
      name: "Segment",
      path: "/segment"
    },
    {
      icon: "albums-outline",
      name: "Slides",
      path: "/slides"
    },
    {
      icon: "cog-outline",
      name: "Tabs",
      path: "/tabs"
    },
    {
      icon: "pricetag-outline",
      name: "Toast",
      path: "/toast"
    },
  ]

  constructor(
    private menu: MenuController
  ) {}

  closeMenu() {
    this.menu.close()
  }
}
