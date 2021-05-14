import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MarsRoverPhotosService } from './mars-rover-photos.service';

describe('MarsRoverPhotosService', () => {
  let service: MarsRoverPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        MarsRoverPhotosService
      ]
    });
    service = TestBed.inject(MarsRoverPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
