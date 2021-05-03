import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private url = "https://api.nasa.gov/planetary/apod?api_key=" + environment.NASA_API_KEY

  constructor(private http: HttpClient) { }

  getApodData(): Observable<any> {
    console.log(this.http.get<any>(this.url));
    return this.http.get<any>(this.url);
  }
}