import { TestBed } from '@angular/core/testing';

import { ServiceAllPageService } from './service-all-page.service';

describe('ServiceAllPageService', () => {
  let service: ServiceAllPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAllPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
