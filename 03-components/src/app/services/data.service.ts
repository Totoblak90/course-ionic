import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { AlbumsData } from '../interfaces/albumsData.interface';
import { UsersData } from '../interfaces/usersData.interface';
import { HeroesData } from '../interfaces/heroesData.interface';

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

  getAlbums() {
    return this.http.get<AlbumsData[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getHeroes() {
    return this.http.get<HeroesData[]>('/assets/data/superheroes.json')
  }
}
