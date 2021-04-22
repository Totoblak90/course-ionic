import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {

  @Input() new: Article;
  @Input() i: number;


  constructor() { }

  ngOnInit() {}

}
