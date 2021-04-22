import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() news: Article[] = [];
  @Input() onFavTab = false;

  constructor(

  ) {}

  ngOnInit(): void {
  }

}
