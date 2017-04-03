import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { routes } from './app.route';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { equal, EqualValidator } from './shared/validation-equal';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        PremierComponent,
        PageNotFoundComponent,
        FormulaireComponent,
        EqualValidator
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}