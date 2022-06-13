import { TestBed } from '@angular/core/testing';

import { CuriousityRandomSolService } from './curiosity-random-sol.service';

describe('TimerService', () => {
  let service: CuriousityRandomSolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriousityRandomSolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
