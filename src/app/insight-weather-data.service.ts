import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsightWeatherDataService {
  private url = "https://api.nasa.gov/insight_weather/?api_key=" + environment.NASA_API_KEY + "&feedtype=json&ver=1.0"

  constructor(private http: HttpClient) { }

  getAllWeatherReports(): Observable<any> {
    console.log(this.http.get<any>(this.url));
    return this.http.get<any>(this.url);
  }
}