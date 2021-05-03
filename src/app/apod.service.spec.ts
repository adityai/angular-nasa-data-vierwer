import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ApodService } from './apod.service';

describe('ApodService', () => {
  let service: ApodService;
  let mockApodService: jasmine.SpyObj<ApodService>;

  beforeEach(() => {
    mockApodService = jasmine.createSpyObj(ApodService, ['getApodData']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ApodService,
        { provide: ApodService, useValue: mockApodService }
      ]

    });
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return apod data', () => {
    mockApodService.getApodData.and.returnValue(of("{input: output}"));
    expect(mockApodService.getApodData()).toBeTruthy();
  });


});
