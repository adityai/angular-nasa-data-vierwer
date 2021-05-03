import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';
import { InsightWeatherDataService } from '../insight-weather-data.service';

import { InsightWeatherDataComponent } from './insight-weather-data.component';

describe('InsightWeatherDataComponent', () => {
  let component: InsightWeatherDataComponent;
  let fixture: ComponentFixture<InsightWeatherDataComponent>;
  let mockInsightWeatherDataService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsightWeatherDataComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InsightWeatherDataService]
    });

    mockInsightWeatherDataService = jasmine.createSpyObj(InsightWeatherDataService, ['getAllWeatherReports']);

    component = new InsightWeatherDataComponent(mockInsightWeatherDataService);

  });

  describe('getAllWeatherData', () => {
    it('should return weather data', () => {
      mockInsightWeatherDataService.getAllWeatherReports.and.returnValue(of("{input: output}"));
      component.ngOnInit();

      expect(component.weatherData.length).toBe(15);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(InsightWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Insight Weather Data');
  });
});

