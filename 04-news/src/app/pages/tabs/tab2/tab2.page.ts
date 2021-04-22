import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from '../../../shared/services/news.service';
import { Article } from '../../../shared/interfaces/news.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;
  categories: string[] = ['business','entertainment','general','health','science','sports','technology'];
  newsByCategory: Article[] = [];

  constructor(
    private newsService: NewsService
  ) {
  }

  ngOnInit(): void {
    this.loadNews(this.categories[2]);
  }

  loadNews(category: string, event?) {
    this.newsService.getNewsByCategory( category )
    .subscribe(ans => {
      this.newsByCategory.push(...ans.articles);

      if (event) {
        event.target.complete();
      }
    });
  }

  changeCategory( event ) {
    this.newsByCategory = [];
    this.loadNews( event.detail.value );
  }

  loadInfiniteData(event) {
    this.loadNews( this.segment.value, event );
  }

}
