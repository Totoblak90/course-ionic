import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../shared/services/news.service';
import { Article } from '../../../shared/interfaces/news.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  businessNews: Article[] = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsService.getTopBusinessHeadlines()
      .subscribe(data => {
        this.businessNews.push(...data.articles);
      });
  }
}
