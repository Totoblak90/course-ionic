import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TopBusinessHeadLinesAnswer } from '../interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getTopBusinessHeadlines() {
    return this.http.get<TopBusinessHeadLinesAnswer>
    (`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${environment.apiKey}`);
  }

}
