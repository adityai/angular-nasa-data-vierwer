import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TimerService } from 'src/app/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public statusText: any;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.timerService.getData())
    ).subscribe(result => this.statusText = this.timerService.getData());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
