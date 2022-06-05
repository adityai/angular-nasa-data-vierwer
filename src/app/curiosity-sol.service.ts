import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuriositySolService {

  public url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=5M12ifePfRKP7c9ywgRFXLYq5J8JHasG8zOKaect"

  constructor(private http: HttpClient) { }

  getLatestMissionUpdateData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
