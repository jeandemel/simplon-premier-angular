import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Utilisateur } from '../../shared/utilisateur';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit, OnChanges {


  /**
   * On met un @Input() sur les propriétés de notre component qui pourront être
   * initialiser par un component parent dans le template via une directive
   * d'assignation (ici [user]="selectedUser" dans le liste-utilisateurs-component.html)
   */
  @Input()
  user: Utilisateur;
  /**
   * On met un @Output() sur les propriétés de type EventEmitter<T> de notre 
   * component. Cela rendra accessible sur le template de ce component un
   * event du nom de la propriété (ou de l'alias si on utilise @Output('nomEvent'))
   * Cet event sera déclenché par la propriété EventEmitter selon les conditions
   * de son declenchement (ici, on declenche onDelete lorsqu'on click sur le 
   * bouton supprimer du template de detail-utilisateur)
   */
  @Output()
  onDelete: EventEmitter<Utilisateur> = new EventEmitter<Utilisateur>();
  @Output()
  onModif: EventEmitter<Utilisateur> = new EventEmitter<Utilisateur>();

  formulaireModif: FormGroup;

  constructor(private fb: FormBuilder) { }
/**
 * On crée un formulaire en model driven pour éviter que les modifications
 * sur l'utilisateur ne se répercute directement sur l'objet du component
 * parent.
 */
  ngOnInit() {
    this.formulaireModif = this.fb.group({
      nom: this.user.nom,
      prenom: this.user.prenom,
      email: this.user.email
    });
  }
  /**
   * Le component DetailUtilisateur n'étant pas détruit à chaque changement de
   * valeur de son input, il faut indiquer que dans le cas où son input est modifié
   * on relance le ngOnInit() afin de remettre le formulaire à "zéro"
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
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
  /**
   * Le submitModif aura pour but d'émettre l'event onModif en lui fournissant
   * en argument un new Utilisateur construit à partir des informations du 
   * formulaire et de certaines informations (non modifiables) du this.user
   */
  submitModif() {
    let modifiedUser = new Utilisateur();
    modifiedUser._id = this.user._id;
    modifiedUser.mdp = this.user.mdp;
    modifiedUser.nom = this.formulaireModif.value.nom;
    modifiedUser.prenom = this.formulaireModif.value.prenom;
    modifiedUser.email = this.formulaireModif.value.email;

    this.onModif.emit(modifiedUser);
  }
}
