import { TestBed } from '@angular/core/testing';

import { WorldbankService } from './worldbank-service.service';

describe('WorldbankServiceService', () => {
  let service: WorldbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
