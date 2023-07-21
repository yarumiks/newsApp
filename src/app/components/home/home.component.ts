import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fa = faNewspaper
  constructor(public route: Router){}
 
  // viewComponent(): any{
  //   if(this.route.url === "/" || this.route.url === "/news"){
  //     return this.route.url;
  //   }
  //   return this.route.url === '';
  // }
}
