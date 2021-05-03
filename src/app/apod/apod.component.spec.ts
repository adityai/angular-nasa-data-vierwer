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
      mockApodService.getApodData.and.returnValue(of("{input: output}"));
      component.ngOnInit();

      expect(component.apodData.length).toBe(15);
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
    expect(compiled.querySelector('h1').textContent).toContain('NASA: Astronomy Picture of the Day');
  });
});
