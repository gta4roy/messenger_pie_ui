import { TestBed } from '@angular/core/testing';

import { ServiceAddressService } from './service-address.service';

describe('ServiceAddressService', () => {
  let service: ServiceAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
