import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { debounceTime, delay, timer } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient, private router: Router) {}
   private key: string = environment._key;

   get Sources(){
    return this.http.get(environment.endPoint1 + this.key).pipe(delay(500))
  }
  
   getArticlesByCategory(category: any){
    return this.http.get(environment.endPoint2 + category + "&apiKey=" + this.key).pipe(delay(500))
  } 
  getEverything(){
    return this.http.get(environment.endPoint3 + this.key).pipe(delay(500))
  }
}
