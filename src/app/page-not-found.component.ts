import { Component } from '@angular/core';
import { PremierService } from './shared/premier.service';

@Component({
    selector: 'page-not-found',
    template: `<h1>Erreur 404</h1>
    <p>La page à laquelle vous tentez d'accéder
    n'existe pas</p>
    <p>
        <a routerLink="/premier">
            Retourner à la premiere page
        </a>
    </p>
    `
})
export class PageNotFoundComponent{
    constructor(private premierService: PremierService){}

}