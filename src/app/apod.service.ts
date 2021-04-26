import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private url = "https://api.nasa.gov/planetary/apod?api_key=" + environment.NASA_API_KEY

  constructor(private http: HttpClient) { }

  getAllWeatherReports(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
