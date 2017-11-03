import { TestBed, inject } from '@angular/core/testing';

import { RdfxmlService } from './rdfxml.service';

describe('RdfxmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdfxmlService]
    });
  });

  it('should be created', inject([RdfxmlService], (service: RdfxmlService) => {
    expect(service).toBeTruthy();
  }));
});
