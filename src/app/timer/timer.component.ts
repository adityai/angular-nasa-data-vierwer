import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CuriousityRandomSolService as curiosityRandomSolService } from 'src/app/curiosity-random-sol.service';
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


  constructor(private timerService: curiosityRandomSolService, private marsRoverPhotoService: MarsRoverPhotosService) { }

  ngOnInit(): void {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.timerService.getData())
    ).subscribe(result => this.randomSol = this.timerService.getData());
    this.marsRoverPhotoService.getCuriosityPhotoForSol(this.randomSol).subscribe(data => {
      let jsonObject = JSON.parse(JSON.stringify(data));
      this.curiosityImageUrl = jsonObject.photos[0].img_src;
      this.curiosityEarthDate = jsonObject.photos[0].earth_date;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
