import { TestBed } from '@angular/core/testing';

import { UserdetailsService } from './userdetails-service.service';

describe('UserdetailsServiceService', () => {
  let service: UserdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
