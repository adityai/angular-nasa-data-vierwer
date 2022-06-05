import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverPhotosService {

  public marsRoverPhotosData: any;
  public url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=5M12ifePfRKP7c9ywgRFXLYq5J8JHasG8zOKaect&sol="
  constructor(private http: HttpClient) { }

  getCuriosityPhotoSol1000(): Observable<any> {
    return this.http.get<any>(this.url + "1000");
  }

  getCuriosityPhotoForSol(sol: any): Observable<any> {
    return this.http.get<any>(this.url + sol);
  }
}
