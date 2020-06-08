import { TestBed } from '@angular/core/testing';

import { HcAuthenticationService } from './hc-authentication.service';

describe('HcAuthenticationService', () => {
  let service: HcAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
