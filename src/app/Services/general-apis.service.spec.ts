import { TestBed } from '@angular/core/testing';

import { GeneralApisService } from './general-apis.service';

describe('GeneralApisService', () => {
  let service: GeneralApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
