import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { empty, of } from 'rxjs';

import { InsightWeatherDataService } from './insight-weather-data.service';

describe('InsightWeatherDataService', () => {
  let insightWeatherDataService: InsightWeatherDataService;
  let mockInsightWeatherDataService: jasmine.SpyObj<InsightWeatherDataService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj(InsightWeatherDataService, ['getAllWeatherReports']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        InsightWeatherDataService,
        { provide: InsightWeatherDataService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    insightWeatherDataService = TestBed.inject(InsightWeatherDataService);
    mockInsightWeatherDataService = TestBed.inject(InsightWeatherDataService) as jasmine.SpyObj<InsightWeatherDataService>;
  });

  it('should be created', () => {
    expect(insightWeatherDataService).toBeTruthy();
  });

  it('should return weather data as json', () => {
    mockInsightWeatherDataService.getAllWeatherReports.and.returnValue(of("{input: output}"));
    expect(mockInsightWeatherDataService.getAllWeatherReports());
  });
});
