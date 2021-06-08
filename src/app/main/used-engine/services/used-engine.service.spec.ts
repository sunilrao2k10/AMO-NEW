import { TestBed } from '@angular/core/testing';

import { UsedEngineService } from './used-engine.service';

describe('UsedEngineService', () => {
  let service: UsedEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsedEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
