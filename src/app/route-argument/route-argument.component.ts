import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-route-argument',
  templateUrl: './route-argument.component.html',
  styleUrls: ['./route-argument.component.css']
})
export class RouteArgumentComponent implements OnInit {
  msg:string;

  /**
   * Le service ActivatedRoute pourra nous fournir tout un tas d'information
   * sur notre route actuelle, notamment les paramètres fournis dans l'url
   * de la route...
   */
  constructor(private activatedRoute:ActivatedRoute) { }

  /**
   * ...ces paramètres sont fournis dans la propriété params du service sous la
   * forme d'un Observable auquel il faudra souscrire pour les récupérer
   * (les clefs qui seront présentes dans l'Observable dépendront des nom 
   * d'argument qu'on aura indiqué dans la définition de notre route, genre 
   * :message)
   */
  ngOnInit() {
    this.activatedRoute.params
                .subscribe((params) => this.msg = params.message);  
  }

}
