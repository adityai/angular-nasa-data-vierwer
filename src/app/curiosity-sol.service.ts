import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuriositySolService {

  public marsRoverPhotosData: any;
  public url = "https://mars.nasa.gov/msl/mission-updates/?month=&year=2021"
  constructor(private http: HttpClient) { }

  getLatestMissionUpdateData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
