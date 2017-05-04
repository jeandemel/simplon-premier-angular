import { Routes } from '@angular/router';
import { PremierComponent } from './premier.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormulaireReactiveComponent } from './formulaire-reactive/formulaire-reactive.component';
import { AjaxComponent } from './ajax/ajax.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { RouteArgumentComponent } from './route-argument/route-argument.component';
import { DirectivesAttributComponent } from './directives-attribut/directives-attribut.component';
import { PipesComponent } from './pipes/pipes.component';

/*
On définit ici les différentes routes de notre application
Chaque route va avoir un path (une url) et un component qui lui sera 
associé.
On peut lancer des redirections sur certains path en utilisant redirectTo avec
le path de redirection comme argument
On utilise le path '**' pour assigner un comportement à un path qui ne matcherait
aucun de ceux que nous avons définis (typiquement pour un 404)
Bien mettre la wildcard (**) en dernier path, sous peine d'outrepasser les
routes définies en dessous de celle ci.
*/
export const routes:Routes = [
    {path: 'premier', component: PremierComponent},
    {path: '', redirectTo: 'premier', pathMatch:'full'},
    {path: 'formulaire', component:FormulaireComponent},
    {path: 'formulaire-reactive', component: FormulaireReactiveComponent},
    {path: 'ajax', component:AjaxComponent},
    {path: 'liste-users', component:ListeUtilisateursComponent},
    {path: 'route-argument/:message', component:RouteArgumentComponent},
    {path: 'directives-attribut', component:DirectivesAttributComponent},
    {path: 'pipes', component:PipesComponent},
    {path: '**', component:PageNotFoundComponent}
];