import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient, private router: Router) {}
  // key = "dbe57b028aeb41e285a226a94865f7a7";
  key: string = "c2571d3d3f6a4194a3f15f4f1d5f1249";
   get Sources(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + this.key)
  }
  
   getArticlesByCategory(category: any){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&category="+ category + "&apiKey=" + this.key)       
  } 
  getEverything(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey="+ this.key)
  }
}
