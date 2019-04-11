import { TestBed, inject } from '@angular/core/testing';

import { HomeaffairsService } from './homeaffairs.service';

describe('HomeaffairsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeaffairsService]
    });
  });

  it('should be created', inject([HomeaffairsService], (service: HomeaffairsService) => {
    expect(service).toBeTruthy();
  }));
});
