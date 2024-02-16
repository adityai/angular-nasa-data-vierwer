import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpressjsService {
  private url = "https://expressjs-sample.azurewebsites.net/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    console.log("Hello: " + this.http.get<any>(this.url));
    return this.http.get<any>(this.url);
  }
}
