import { Component } from '@angular/core';


@Component({
    selector: 'premier',
    templateUrl: './premier.component.html'
})
export class PremierComponent {
    monObjet:any;
    premiereVariable:string;
    tableau:string[];

    constructor() {
        this.premiereVariable = 'bloup';
        this.monObjet = {
            attribut1: 'ga',
            attribut2: 'zo'
        };
        this.tableau = ['ga', 'zo', 'bu', 'meu'];
    }

    ajout():void {
        this.tableau.push(this.premiereVariable);
    }
    
    suppression(index): void {
        this.tableau.splice(index, 1);
    }
 

}