import { TestBed, inject } from '@angular/core/testing';

import { CompteurService } from './compteur.service';
import { PremierService } from './premier.service';

describe('CompteurService', () => {
    let spyPremierService;

  beforeEach(() => {
    let premierServiceStub = {
        methode: function(){}
    };
    spyPremierService = spyOn(premierServiceStub, 'methode');

    TestBed.configureTestingModule({
      providers: [
          CompteurService,
          {provide: PremierService, useValue: premierServiceStub}
        ]
    });
  });

  it('should ...', inject([CompteurService], (service: CompteurService) => {
    expect(service).toBeTruthy();
  }));

  it('should increment', inject([CompteurService], (service: CompteurService) => {
    service.incrementer();
    expect(service.compteur).toBe(1);
    expect(spyPremierService.calls.any()).toBeTruthy();
  }));

  it('should increment', inject([CompteurService], (service: CompteurService) => {
    service.incrementer();
    service.incrementer();
    expect(service.compteur).toBe(2);
    expect(spyPremierService.calls.any()).toBeTruthy();
  }));
});
