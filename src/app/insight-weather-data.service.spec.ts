import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { InsightWeatherDataService } from './insight-weather-data.service';

describe('InsightWeatherDataService', () => {
  let insightWeatherDataService: InsightWeatherDataService;
  let mockInsightWeatherDataService: jasmine.SpyObj<InsightWeatherDataService>;

  beforeEach(() => {

    mockInsightWeatherDataService = jasmine.createSpyObj(InsightWeatherDataService, ['getAllWeatherReports']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        InsightWeatherDataService,
        { provide: InsightWeatherDataService, useValue: mockInsightWeatherDataService }
      ]
    });
    insightWeatherDataService = TestBed.inject(InsightWeatherDataService);
  });

  it('should be created', () => {
    expect(insightWeatherDataService).toBeTruthy();
  });

  it('should return all weather data', () => {
    mockInsightWeatherDataService.getAllWeatherReports.and.returnValue(of("{input: output}"));
    expect(mockInsightWeatherDataService.getAllWeatherReports()).toBeTruthy();
  });
});
