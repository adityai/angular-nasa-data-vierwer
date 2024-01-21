import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApodService } from '../apod.service';

import { ApodComponent } from './apod.component';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;
  let mockApodService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApodComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApodService]
    });

    mockApodService = jasmine.createSpyObj(ApodService, ['getApodData']);

    component = new ApodComponent(mockApodService);
  });

  describe('getApodData', () => {
    it('should return apod data', () => {
      mockApodService.getApodData.and.returnValue(of('{ "date": "2024-01-21", "explanation": "Yes, but can your blizzard do this? In the Upper Peninsula of Michigan\'s Storm of the Century in 1938, some snow drifts reached the level of utility poles. Nearly a meter of new and unexpected snow fell over two days in a storm that started 86 years ago this week. As snow fell and gale-force winds piled snow to surreal heights, many roads became not only impassable but unplowable; people became stranded, cars, school buses and a train became mired, and even a dangerous fire raged. Two people were killed and some students were forced to spend several consecutive days at school. The featured image was taken by a local resident soon after the storm. Although all of this snow eventually melted, repeated snow storms like this help build lasting glaciers in snowy regions of our planet Earth.", "hdurl": "https://apod.nasa.gov/apod/image/2401/snowpoles_brinkman_960.jpg", "media_type": "image", "service_version": "v1", "title": "The Upper Michigan Blizzard of 1938", "url": "https://apod.nasa.gov/apod/image/2401/snowpoles_brinkman_960.jpg" }'));
      component.ngOnInit();
      expect(component.apodData).toContain("https://apod.nasa.gov/apod/image/2401/snowpoles_brinkman_960.jpg");
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title "NASA: Astronomy Picture of the Day"', () => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('NASA: Astronomy Picture of the Day');
  });
});
