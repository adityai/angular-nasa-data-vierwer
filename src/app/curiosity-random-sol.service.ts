import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuriousityRandomSolService {

  constructor() { }

  getData(): any {
    return Math.floor((Math.random() * 3000)).toString();
  }
}
