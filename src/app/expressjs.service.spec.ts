import { TestBed } from '@angular/core/testing';

import { ExpressjsService } from './expressjs.service';

describe('ExpressjsService', () => {
  let service: ExpressjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
