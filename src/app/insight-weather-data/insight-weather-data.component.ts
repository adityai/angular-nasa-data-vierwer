import { Component, OnInit } from '@angular/core';
import { InsightWeatherDataService } from '../insight-weather-data.service';

@Component({
  selector: 'app-insight-weather-data',
  templateUrl: './insight-weather-data.component.html',
  styleUrls: ['./insight-weather-data.component.css']
})
export class InsightWeatherDataComponent implements OnInit {
  public weatherData: any;
  constructor(private service: InsightWeatherDataService) { }

  ngOnInit(): void {
    this.service.getAllWeatherReports().subscribe(data => {
      this.weatherData = data;
    })
  }

}
