import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { UsersData } from '../interfaces/usersData.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersData() {

    return this.http.get<UsersData[]>('https://jsonplaceholder.typicode.com/users')
      
  }
}
