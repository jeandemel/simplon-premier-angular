import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Utilisateur } from '../../shared/utilisateur';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  /**
   * On met un @Input() sur les propriétés de notre component qui pourront être
   * initialiser par un component parent dans le template via une directive
   * d'assignation (ici [user]="selectedUser" dans le liste-utilisateurs-component.html)
   */
  @Input()
  user:Utilisateur;
  /**
   * On met un @Output() sur les propriétés de type EventEmitter<T> de notre 
   * component. Cela rendra accessible sur le template de ce component un
   * event du nom de la propriété (ou de l'alias si on utilise @Output('nomEvent'))
   * Cet event sera déclenché par la propriété EventEmitter selon les conditions
   * de son declenchement (ici, on declenche onDelete lorsqu'on click sur le 
   * bouton supprimer du template de detail-utilisateur)
   */
  @Output()
  onDelete:EventEmitter<Utilisateur> = new EventEmitter<Utilisateur>();

  constructor() { }

  ngOnInit() {
  }
  /**
   * La méthode clickSupprimer de ce component ne fait qu'emettre l'event 
   * onDelete du component on lui fournissant en argument l'utilisateur lié
   * à ce component (user).
   * En effet, dans ce genre de cas, il ne serait pas très judicieux de laisser
   * un sous-component influer sur la valeur des variables du component parent
   */
  clickSupprimer() {
    this.onDelete.emit(this.user);
  }

}
