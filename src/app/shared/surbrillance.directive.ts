import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';
/*
Les directives d'attributs vont nous permettre de créer de nouveaux "attributs angular"
(comme ngModel ou ngClass) qui pourront s'appliquer sur n'importe quel élément html
dans les templates.
On pourra y manipuler le DOM des élément pour rajouter par exemple des évènements js
*/
@Directive({
    selector: '[siSurbrillance]'
})
export class SurbrillanceDirective {
/*
Tout comme avec les components, on peut passer des valeurs à la directive depuis le
template en utilisant le décorateur @Input. Ici on récupère la couleur de surbrillance,
on l'obtient via la valeur donnée à l'attribut siSurbrillance (grâce à l'alias, l'argument
dans le @Input(), sans cet argument, il aurait fallu fournir la couleur dans un attribut
supplémentaire couleur="yellow" par exemple)
*/
    @Input('siSurbrillance')
    private couleur:string;

/*
Les directives d'attributs donnent accès à l'élément DOM sur lequel la directive
sera placée via ElementRef.
*/
    constructor(private element: ElementRef) { }

/*
On pourra influer sur le DOM de cet élément comme on le ferait en js natif.
*/
    // ngOnInit(): void {
    //     this.element.nativeElement.onmouseenter = function() {
    //         console.log('entré');
    //     };

    //     this.element.nativeElement.addEventListener('mouseleave', function() {
    //         console.log('sortie');
    //     });
    // }
/*
Plutôt qu'ajouter directement les évènements sur le dom de l'élément, Angular propose 
un décorateur @HostListener() qui attend en argument l'event à cibler et qui décorera
une méthode qui s'exécutera lorsque l'event en question sera declencher
*/
    @HostListener('mouseenter')
    onMouseEnter() {
        this.element.nativeElement.style.backgroundColor = this.couleur;
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.element.nativeElement.style.backgroundColor = null;
    }
}