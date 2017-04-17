import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { routes } from './app.route';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { equal, EqualValidator } from './shared/validation-equal';
import { FormulaireReactiveComponent } from './formulaire-reactive/formulaire-reactive.component';
import {HttpModule} from '@angular/http';
import { AjaxComponent } from './ajax/ajax.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { DetailUtilisateurComponent } from './liste-utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { RouteArgumentComponent } from './route-argument/route-argument.component';
import { ListeChienComponent } from './gestion-chien/liste-chien/liste-chien.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PremierComponent,
        PageNotFoundComponent,
        FormulaireComponent,
        EqualValidator,
        FormulaireReactiveComponent,
        AjaxComponent,
        ListeUtilisateursComponent,
        DetailUtilisateurComponent,
        RouteArgumentComponent,
        ListeChienComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}