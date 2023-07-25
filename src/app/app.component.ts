import { Component, ElementRef, Injectable, ViewChild, inject } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { NewsService } from './services/news.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HomeComponent } from './components/home/home.component';


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



  selectedCategory() {
    const routerName = this.router.url.replace("/", "");
    if (routerName == "news") {
      this.news.getEverything().subscribe((d: any) => {
        this.articles = d.articles;
      })
    } else {
      this.news.getArticlesByCategory(routerName).subscribe((d: any) => {
        this.articles = d.articles;

      })
    }
  }

}



