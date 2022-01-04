import { TestBed } from '@angular/core/testing';

import { JocService } from './joc.service';

describe('JocService', () => {
  let service: JocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
