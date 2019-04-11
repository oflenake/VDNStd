import { TestBed, inject } from '@angular/core/testing';

import { VdparentappService } from './vdparentapp.service';

describe('VdparentappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VdparentappService]
    });
  });

  it('should be created', inject([VdparentappService], (service: VdparentappService) => {
    expect(service).toBeTruthy();
  }));
});
