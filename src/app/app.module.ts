import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsightWeatherDataComponent } from './insight-weather-data/insight-weather-data.component';
import { HttpClientModule } from "@angular/common/http";
import { ApodComponent } from './apod/apod.component'

@NgModule({
  declarations: [
    AppComponent,
    InsightWeatherDataComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
