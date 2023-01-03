import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PerseverancePhotosService {

  public url = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=5M12ifePfRKP7c9ywgRFXLYq5J8JHasG8zOKaect"
  constructor(private http: HttpClient) { }

  getPerseverancePhotoLatest(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
