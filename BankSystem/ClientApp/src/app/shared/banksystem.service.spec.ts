import { TestBed, inject } from '@angular/core/testing';

import { BanksystemService } from './banksystem.service';

describe('BanksystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanksystemService]
    });
  });

  it('should be created', inject([BanksystemService], (service: BanksystemService) => {
    expect(service).toBeTruthy();
  }));
});
