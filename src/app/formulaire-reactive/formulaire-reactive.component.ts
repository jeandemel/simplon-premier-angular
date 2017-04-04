import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, AbstractControl } from '@angular/forms';
import { equal } from '../shared/validation-equal';

/**
 * Les ReactiveForms définiront la logique des formulaires et leur validation
 * à l'intérieur de la classe Component plutôt que dans le template de celui ci
 * d'où l'appélation de model driven forms à l'inverse des template driven.
 * 
 */
@Component({
  selector: 'app-formulaire-reactive',
  templateUrl: './formulaire-reactive.component.html',
  styleUrls: ['./formulaire-reactive.component.css']
})
export class FormulaireReactiveComponent implements OnInit {
  //Les FormControl seront les objets assignés aux inputs / select / radio...
  // nom:FormControl;
  //Les FormGroup permettront de regrouper plusieurs FormControl pour ne pas
  //avoir à les gérer individuellement
  formulaire:FormGroup;
  
  /*
  Le FormBuilder est un service natif de ReactiveFormsModule qui nous fournira
  des méthodes factory permettant de créer un peu plus rapidement des 
  FormControl/Group/Array
  */
  constructor(private fb:FormBuilder) { 
    // this.nom = new FormControl();
    // this.formulaire = new FormGroup({
    //   nom: new FormControl()
    // });
  }

  ngOnInit() {
    /*
    On utilise le formBuilder pour créer notre form group et ses form controls,
    on peut assigner directement un Validator à un form control en le fournissant
    en deuxième argument d'un array comme valeur du form control.
    */
    this.formulaire = this.fb.group({
      nom: [
        '', 
        [Validators.required, Validators.maxLength(24)]
      ],
      prenom: '',
      email: [
        '', 
        Validators.email
      ],
      mdp: [
        '', 
        [Validators.required,Validators.minLength(3)]
      ],
      mdp2: ['',
        Validators.required
      ]
    },
    {
      validator: this.confirmationMdp
    });
    
  }
  /**
   * Les fonctions de validation ont le profil suivant :
   * Elle ont en argument un AbstractControl (FormGroup, FormControl, FormArray)
   * et renvoie un objet ayant des clefs de types strings (qui seront les clefs
   * des erreurs de validations accessible sur l'AbstractControl auquel on assigne
   * cette validation). La fonction renvoie null si la validation passe.
   */
  private confirmationMdp(group:FormGroup):{[key:string]:any} {
    if(group.get('mdp').value === group.get('mdp2').value) {
      return null;
    }
    return {notSamePasswords:true};
  }

  inscription() {
    // console.log(this.nom.value);
    // for(let clef in this.formulaire.controls) {
    //   console.log(clef);
    // }
    console.log(this.formulaire.value);
    
  }

}
