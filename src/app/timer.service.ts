import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  getData(): any {
    console.log("test");
    return Math.floor((Math.random() * 3000)).toString();
  }
}
