import { TestBed, inject } from '@angular/core/testing';

import { MacssolutionService } from './macssolution.service';

describe('MacssolutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacssolutionService]
    });
  });

  it('should be created', inject([MacssolutionService], (service: MacssolutionService) => {
    expect(service).toBeTruthy();
  }));
});
