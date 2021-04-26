import { Component, OnInit } from '@angular/core';
import { ApodService } from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  public apodData: any;
  public apodImageUrl: any;
  public apodTitle: any;
  public apodExplanation: any;
  public apodHdImageUrl: any;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    this.service.getAllWeatherReports().subscribe(data => {
      this.apodData = data;
      let jsonObject = JSON.parse(JSON.stringify(this.apodData));
      this.apodImageUrl = jsonObject.url;
      this.apodTitle = jsonObject.title;
      this.apodExplanation = jsonObject.explanation;
      this.apodHdImageUrl = jsonObject.hdurl;
    })
  }

}
