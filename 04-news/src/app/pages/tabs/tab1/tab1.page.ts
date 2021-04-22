import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { Article } from '../../../shared/interfaces/news.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  topArgNews: Article[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadInfiniteData( event ) {
    this.loadNews( event );
  }

  loadNews( event? ) {

    this.newsService.getTopArgNews()
    .subscribe(data => {

      if (data.articles.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      this.topArgNews.push(...data.articles);

      if ( event ) {
       event.target.complete();
      }
    });


  }
}
