import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  selectedNewsId:number;
  expandNews(id:number) {
    this.selectedNewsId = id;
    return false;
  }
  constructor() { }

  ngOnInit() {
  }

}
