import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsightWeatherDataComponent } from './insight-weather-data/insight-weather-data.component';
import { HttpClientModule } from '@angular/common/http';
import { InsightWeatherDataService } from './insight-weather-data.service';
import { ApodComponent } from './apod/apod.component';
import { MarsRoverPhotosComponent } from './mars-rover-photos/mars-rover-photos.component';
import { CuriositySolComponent } from './curiosity-sol/curiosity-sol.component';

@NgModule({
  declarations: [
    AppComponent,
    InsightWeatherDataComponent,
    ApodComponent,
    MarsRoverPhotosComponent,
    CuriositySolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InsightWeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
