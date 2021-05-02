import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsightWeatherDataService } from '../insight-weather-data.service';

import { InsightWeatherDataComponent } from './insight-weather-data.component';

describe('InsightWeatherDataComponent', () => {
  let component: InsightWeatherDataComponent;
  let fixture: ComponentFixture<InsightWeatherDataComponent>;

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

    fixture = TestBed.createComponent(InsightWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Insight Weather Data');
  });
});
