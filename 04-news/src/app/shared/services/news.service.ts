import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TopBusinessHeadLinesAnswer } from '../interfaces/news.interface';


const apiKey = environment.apiKey;
const apiURl = environment.baseUrl;
const headers = new HttpHeaders({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private topArgpageNumber = 0;
  private byCatpageNumber = 0;
  private activeCategory = '';

  constructor(
    private http: HttpClient
    ) { }

    getTopArgNews() {
    this.topArgpageNumber++;
    return this.executeQuery<TopBusinessHeadLinesAnswer>(`/top-headlines?country=ar&page=${this.topArgpageNumber}`);
  }

  getNewsByCategory( category: string ) {

    if (this.activeCategory === category) {
      this.byCatpageNumber++;
    } else {
      this.byCatpageNumber = 1;
      this.activeCategory = category;
    }

    return this.executeQuery<TopBusinessHeadLinesAnswer>(`/top-headlines?country=ar&category=${category}&page=${this.byCatpageNumber}`);
  }

  private executeQuery<T>( query: string) {
    query = `${apiURl}${query}`;
    return this.http.get<T>(query, { headers });
  };



}
