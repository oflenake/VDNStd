import { TestBed, inject } from '@angular/core/testing';

import { WebticketsystemService } from './webticketsystem.service';

describe('WebticketsystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebticketsystemService]
    });
  });

  it('should be created', inject([WebticketsystemService], (service: WebticketsystemService) => {
    expect(service).toBeTruthy();
  }));
});
