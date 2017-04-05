import { TestBed, inject } from '@angular/core/testing';

import { PremierAjaxService } from './premier-ajax.service';

describe('PremierAjaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremierAjaxService]
    });
  });

  it('should ...', inject([PremierAjaxService], (service: PremierAjaxService) => {
    expect(service).toBeTruthy();
  }));
});
