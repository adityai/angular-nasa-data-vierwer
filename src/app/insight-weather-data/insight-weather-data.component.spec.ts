import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightWeatherDataComponent } from './insight-weather-data.component';

describe('InsightWeatherDataComponent', () => {
  let component: InsightWeatherDataComponent;
  let fixture: ComponentFixture<InsightWeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightWeatherDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
