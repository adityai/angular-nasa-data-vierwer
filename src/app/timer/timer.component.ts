import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CuriosityRandomSolService } from 'src/app/curiosity-random-sol.service';
import { MarsRoverPhotosService } from '../mars-rover-photos.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public randomSol: any;
  public curiosityImageUrl: any;
  public curiosityEarthDate: any;
  public curiosityData: any;

  constructor(private curiosityRandomSolService: CuriosityRandomSolService
              , private marsRoverPhotoService: MarsRoverPhotosService
             ) { }

  ngOnInit(): void {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.curiosityRandomSolService.getData())
    ).subscribe(result => {
      this.randomSol = this.curiosityRandomSolService.getData();
      this.marsRoverPhotoService.getCuriosityPhotoForSol(this.randomSol).subscribe(data => {
        this.curiosityData = data;
        let jsonObject = JSON.parse(JSON.stringify(this.curiosityData));
        this.curiosityImageUrl = jsonObject.photos[0].img_src;
        this.curiosityEarthDate = jsonObject.photos[0].earth_date;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
