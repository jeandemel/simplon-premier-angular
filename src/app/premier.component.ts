import { Component } from '@angular/core';
import { CompteurService } from './shared/compteur.service';

/**
 * Le "scope" des injections dépend de l'endroit où l'on déclare le provider.
 * Si je déclare un provider dans le component racine (AppComponent), la même
 * instance est partagée par tous les composants, mais si je le déclare dans 
 * un component spécifique, l'instance du service sera propre à ce component
 * et à ses enfants.
 * Ici, je redéfinis le provider CompteurService dans PremierComponent, ce qui
 * fait qu'au lieu d'utiliser l'instance "globale" déclarée dans le AppComponent,
 * PremierComponent crée une instance de CompteurService qui lui est propre à
 * chaque fois qu'on accède à ce Component.
 */
@Component({
    selector: 'premier',
    templateUrl: './premier.component.html',
    providers: [CompteurService]
})
export class PremierComponent {
    monObjet:any;
    premiereVariable:string;
    tableau:string[];

    constructor(private compteurService:CompteurService) {
        this.premiereVariable = 'bloup';
        this.monObjet = {
            attribut1: 'ga',
            attribut2: 'zo'
        };
        this.tableau = ['ga', 'zo', 'bu', 'meu'];
    }

    ajout():void {
        this.tableau.push(this.premiereVariable);
        this.compteurService.incrementer();
    }
    
    suppression(index): void {
        this.tableau.splice(index, 1);
    }
 

}