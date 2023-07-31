import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//this service progress bar allows us to check
export class LoaderService {
    public loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
