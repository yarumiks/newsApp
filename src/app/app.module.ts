import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { InterceptorService } from './services/interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
