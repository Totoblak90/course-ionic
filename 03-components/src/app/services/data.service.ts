import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators'

// Interfaces
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

    return this.http.get<UsersData[]>('https://jsonplaceholder.typicode.com/users');
      
  }

  getAlbums() {
    return this.http.get<AlbumsData[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<HeroesData[]>('/assets/data/superheroes.json')
      .pipe(
        delay(5000)
      )
  }
}
