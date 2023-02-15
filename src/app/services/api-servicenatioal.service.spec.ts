import { TestBed } from '@angular/core/testing';

import { ApiServicenatioalService } from './api-servicenatioal.service';

describe('ApiServicenatioalService', () => {
  let service: ApiServicenatioalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicenatioalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
