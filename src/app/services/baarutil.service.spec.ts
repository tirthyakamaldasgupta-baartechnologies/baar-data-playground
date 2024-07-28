import { TestBed } from '@angular/core/testing';

import { BaarutilService } from './baarutil.service';

describe('BaarutilService', () => {
  let service: BaarutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaarutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
