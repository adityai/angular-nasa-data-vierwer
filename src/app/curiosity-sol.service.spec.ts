import { TestBed } from '@angular/core/testing';

import { CuriositySolService } from './curiosity-sol.service';

describe('CuriositySolService', () => {
  let service: CuriositySolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriositySolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
