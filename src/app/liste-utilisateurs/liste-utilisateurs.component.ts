import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../shared/utilisateur';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  liste:Utilisateur[] = [];
  selectedUser:Utilisateur;

  constructor() {
   }

  ngOnInit() {
    for(let x = 1; x < 5; x++) {
      let user = new Utilisateur();
      user._id = x+'';
      user.email = 'email'+x+'@mail.com';
      user.nom = 'nom'+x;
      user.prenom = 'prenom'+x;
      this.liste.push(user);
    }
  }

  supprimerUser(user:Utilisateur) {
    this.liste = this.liste.filter((item) => item._id !== user._id);
    this.selectedUser = null;
  }

}
