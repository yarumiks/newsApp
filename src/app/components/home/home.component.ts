import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons'
import { AppComponent } from 'src/app/app.component';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fa = faNewspaper;
  homeArticles: any[] = [];
  categoryArticles: any= [];
  times: any= [];
  constructor(public route: Router, private app: AppComponent, public news: NewsService){}

  ngOnInit(){
    this.news.Sources.subscribe((res: any) =>{
      console.log(res);
      this.homeArticles = res.articles;
    })
  }

  ngAfterViewInit() {
    let deneme = this.app.selectedCategory();
    console.log(deneme);
    
  }
}




