import { TestBed } from '@angular/core/testing';

import { PerseverancePhotosService } from './perseverance-photos.service';

describe('PerseverancePhotosService', () => {
  let service: PerseverancePhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerseverancePhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
