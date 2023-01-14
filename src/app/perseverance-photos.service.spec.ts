import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PerseverancePhotosService } from './perseverance-photos.service';

describe('PerseverancePhotosService', () => {
  let service: PerseverancePhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        PerseverancePhotosService
      ]
    });
    service = TestBed.inject(PerseverancePhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
