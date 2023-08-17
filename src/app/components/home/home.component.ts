import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons'
import { AppComponent } from 'src/app/app.component';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fa = faNewspaper;
  
  homeArticles: object[] = [];
  detailArticles: object[] = [];
  constructor(public route: Router, private appC: AppComponent, public news: NewsService){}

  ngOnInit(){
    this.news.Sources().subscribe((res: any) =>{
      this.homeArticles = res.articles;
    })
  }

  ngDoCheck(){
    this.detailArticles = this.appC.articles;
  }

}




