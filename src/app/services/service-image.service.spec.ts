import { TestBed } from '@angular/core/testing';

import { ServiceImageService } from './service-image.service';

describe('ServiceImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceImageService = TestBed.get(ServiceImageService);
    expect(service).toBeTruthy();
  });
});
