import { TestBed } from '@angular/core/testing';

import { MarvelApiServiceService } from './marvel-api-service.service';

describe('MarvelApiServiceService', () => {
  let service: MarvelApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
