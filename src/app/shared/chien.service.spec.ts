import { TestBed, inject } from '@angular/core/testing';

import { ChienService } from './chien.service';

describe('ChienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChienService]
    });
  });

  it('should ...', inject([ChienService], (service: ChienService) => {
    expect(service).toBeTruthy();
  }));
});
