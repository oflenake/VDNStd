import { TestBed, inject } from '@angular/core/testing';

import { HttpClientAppService } from './http-client-app.service';

describe('HttpClientAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientAppService]
    });
  });

  it('should be created', inject([HttpClientAppService], (service: HttpClientAppService) => {
    expect(service).toBeTruthy();
  }));
});
