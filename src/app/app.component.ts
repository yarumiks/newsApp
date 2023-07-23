import { Component, Injectable, inject } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { NewsService } from './services/news.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  fa = faNewspaper;
  articles: any = [];
  constructor(public news: NewsService, private router: Router) {}



  selectedCategory(){
    const routerName = this.router.url.replace("/", "");
    console.log(routerName)
     return this.news.getArticlesByCategory(routerName).subscribe((d: any) => {
      console.log(d.articles);
      this.articles = d.articles;    
    })
  }
}


