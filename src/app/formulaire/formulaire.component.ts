import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../shared/utilisateur';
import { PremierService } from '../shared/premier.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nouvelUtilisateur:Utilisateur;
  mdp2:string;
/**
 * On peut injecter des instances de classes à l'intérieur de nos classes
 * angular en spécifiant dans le constructeur une propriété du type à
 * injecter. Pour que l'injection fonctionne, il faut que la classe ou un
 * de ses parents (plus ou moins lointain) définisse un provider du type en
 * question.
 * @param premierService ici nous avons besoin d'un provider de type PremierService
 */
  constructor(private premierService:PremierService) {
    this.nouvelUtilisateur = new Utilisateur();
   }

  ngOnInit() {
    this.premierService.methode();
  }

  inscription(): void {
    console.log(this.nouvelUtilisateur);
    console.log(this.mdp2);
  }
}
