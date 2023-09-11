import { TestBed } from '@angular/core/testing';

import { Profileserv } from './profileserv.service';

describe('ProfileservService', () => {
  let service: Profileserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Profileserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
