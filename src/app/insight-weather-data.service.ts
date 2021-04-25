import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsightWeatherDataService {
  private url = "https://api.nasa.gov/insight_weather/?api_key=5M12ifePfRKP7c9ywgRFXLYq5J8JHasG8zOKaect&feedtype=json&ver=1.0"

  constructor(private http: HttpClient) { }

  getAllWeatherReports(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
