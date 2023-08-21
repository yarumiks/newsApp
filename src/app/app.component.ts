import { Component, ElementRef, Injectable, ViewChild, inject } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { NewsService } from './services/news.service';
import { Router } from '@angular/router';
import { Observable, Subject, concatMap, debounceTime, delay, exhaustMap, finalize, fromEvent, map, merge, mergeMap, switchMap, timer } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  fa = faNewspaper;
  articles: any = [];
  loading: boolean = false;

  constructor(public news: NewsService, private router: Router, public loaderService: LoaderService) { }

  ngOnInit() {
  }

  // this loading variable disables the click event of 
  //the li elements until the result is returned when 
  //the request comes from the api.
  selectedCategory<T extends object[]>(): void {
    const routerName: string = this.router.url.replace("/", "");
    this.loading = true;

    if (routerName == "news") {
      this.news.getEverything<T>().
        pipe(
          finalize(
            () =>
              this.loading = false
          )).
        subscribe(
          (d: any) => {
            this.articles = d.articles;
          })
    } else {
      this.news.getArticlesByCategory<T>(routerName).
        pipe(
          finalize(() => this.loading = false)).
        subscribe((d: any) => {
          this.articles = d.articles;
        })
    }
  }
}
