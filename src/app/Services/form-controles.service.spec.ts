import { TestBed } from '@angular/core/testing';

import { FormControlesService } from './form-controles.service';

describe('FormControlesService', () => {
  let service: FormControlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
