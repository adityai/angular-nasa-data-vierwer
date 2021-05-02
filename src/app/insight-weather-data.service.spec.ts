import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InsightWeatherDataService } from './insight-weather-data.service';

describe('InsightWeatherDataService', () => {
  let service: InsightWeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InsightWeatherDataService]
    });
    service = TestBed.inject(InsightWeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
