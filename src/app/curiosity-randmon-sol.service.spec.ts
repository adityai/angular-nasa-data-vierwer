import { TestBed } from '@angular/core/testing';

import { CuriosityRandomSolService } from './curiosity-random-sol.service';

describe('TimerService', () => {
  let service: CuriousityRandomSolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriosityRandomSolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
