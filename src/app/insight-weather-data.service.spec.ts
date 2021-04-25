import { TestBed } from '@angular/core/testing';

import { InsightWeatherDataService } from './insight-weather-data.service';

describe('InsightWeatherDataService', () => {
  let service: InsightWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsightWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
