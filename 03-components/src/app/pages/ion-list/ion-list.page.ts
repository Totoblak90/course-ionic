import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UsersData } from '../../interfaces/usersData.interface';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-ion-list',
  templateUrl: './ion-list.page.html',
  styleUrls: ['./ion-list.page.scss'],
})
export class IonListPage implements OnInit {

  users: UsersData[];
  @ViewChild(IonList) ionList: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUsersData()
      .subscribe(users => this.users = users)
  }

  favorite( user: UsersData) {
    console.log(`Contact of: ${user.name} is now favorite!!`)
    this.ionList.closeSlidingItems()
  }

  share(user: UsersData) {
    console.log(`Contact of: ${user.name} is now shared!!`)
    this.ionList.closeSlidingItems()
  }

  unRead( user: UsersData) {
    console.log(`Contact of: ${user.name} is now unread!!`)
    this.ionList.closeSlidingItems()
  }

}
