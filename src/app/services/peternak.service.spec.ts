import { TestBed } from '@angular/core/testing';

import { PeternakService } from './peternak.service';

describe('PeternakService', () => {
  let service: PeternakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeternakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
