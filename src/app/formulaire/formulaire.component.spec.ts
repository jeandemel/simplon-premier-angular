import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireComponent } from './formulaire.component';
import { FormsModule } from '@angular/forms';
import { EqualValidator } from '../shared/validation-equal';
import { PremierService } from '../shared/premier.service';
import { CompteurService } from '../shared/compteur.service';
import { By } from "@angular/platform-browser";

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FormulaireComponent, EqualValidator ],
      providers: [
        {provide: PremierService, useValue: {methode: function(){}}},
        {provide:CompteurService, useValue:{increment: function(){}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changer valeur utilisateur', function() {
    component.nouvelUtilisateur.nom = 'bloup';
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      let de = fixture.debugElement.query(By.css('input[name="nom"]'));
      expect(de.nativeElement.value).toBe('bloup');
    });
  });

  it('changer valeur utilisateur', function() {
      let de = fixture.debugElement.query(By.css('input[name="nom"]'));
      de.nativeElement.value = 'nom test';
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      expect(component.nouvelUtilisateur.nom).toBe('nom test');
    });
  });
});
