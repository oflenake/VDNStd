import { TestBed, inject } from '@angular/core/testing';

import { DataOverrideService } from './data-override.service';

describe('DataOverrideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataOverrideService]
    });
  });

  it('should be created', inject([DataOverrideService], (service: DataOverrideService) => {
    expect(service).toBeTruthy();
  }));
});
