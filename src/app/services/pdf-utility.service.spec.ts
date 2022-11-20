import { TestBed } from '@angular/core/testing';

import { PdfUtilityService } from './pdf-utility.service';

describe('PdfUtilityService', () => {
  let service: PdfUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
