import { TestBed } from '@angular/core/testing';

import { CentroService } from './centros.service';

describe('CentrosService', () => {
  let service: CentroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
