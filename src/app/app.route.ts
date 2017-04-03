import { Routes } from '@angular/router';
import { PremierComponent } from './premier.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

/*
On définit ici les différentes routes de notre application
Chaque route va avoir un path (une url) et un component qui lui sera 
associé.
On peut lancer des redirections sur certains path en utilisant redirectTo avec
le path de redirection comme argument
On utilise le path '**' pour assigner un comportement à un path qui ne matcherait
aucun de ceux que nous avons définis (typiquement pour un 404)
*/
export const routes:Routes = [
    {path: 'premier', component: PremierComponent},
    {path: '', redirectTo: 'premier', pathMatch:'full'},
    {path: 'formulaire', component:FormulaireComponent},
    {path: '**', component:PageNotFoundComponent}
];