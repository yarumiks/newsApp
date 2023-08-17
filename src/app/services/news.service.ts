import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Observable, debounceTime, delay, timer } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient, private router: Router) {}
   private key: string = environment._key;

    Sources<T extends object[]>(): Observable<T>{
    return this.http.get<T>(environment.endPoint1 + this.key).pipe(delay(500))
  }
  
   getArticlesByCategory<T extends object[]>(category: string): Observable<T>{
    return this.http.get<T>(environment.endPoint2 + category + "&apiKey=" + this.key).pipe(delay(500))
  } 
  getEverything<T extends object[]>(): Observable<T>{
    return this.http.get<T>(environment.endPoint3 + this.key).pipe(delay(500))
  }
}
