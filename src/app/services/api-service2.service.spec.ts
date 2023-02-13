import { TestBed } from '@angular/core/testing';

import { ApiService2Service } from './api-service2.service';

describe('ApiService2Service', () => {
  let service: ApiService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
