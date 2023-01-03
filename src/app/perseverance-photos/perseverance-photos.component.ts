import { Component, OnInit } from '@angular/core';
import { PerseverancePhotosService } from '../perseverance-photos.service';

@Component({
  selector: 'app-perseverance-photos',
  templateUrl: './perseverance-photos.component.html',
  styleUrls: ['./perseverance-photos.component.css']
})
export class PerseverancePhotosComponent implements OnInit {
  public data: any;
  public imageUrl: any;
  public earthDate: any;

  constructor(private service: PerseverancePhotosService) { }

  ngOnInit(): void {
    this.service.getPerseverancePhotoLatest().subscribe(data => {
      this.data = data;
      let jsonObject = JSON.parse(JSON.stringify(this.data));
      this.imageUrl = jsonObject.photos[0].img_src;
      this.earthDate = jsonObject.photos[0].earth_date;
      console.log(this.earthDate);
    });

  }

}
