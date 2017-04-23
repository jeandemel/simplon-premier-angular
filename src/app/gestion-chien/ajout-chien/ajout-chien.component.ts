import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Chien} from '../../shared/chien';

@Component({
  selector: 'app-ajout-chien',
  templateUrl: './ajout-chien.component.html',
  styleUrls: ['./ajout-chien.component.css']
})
export class AjoutChienComponent implements OnInit {
  formuChien:FormGroup;
  @Output()
  onAjout:EventEmitter<Chien> = new EventEmitter<Chien>();

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.formuChien = this.fb.group({
      nom: ['', Validators.required] ,
      race: ['',Validators.required],
      dateNaissance: ['', [Validators.pattern('[0-9]{2}/[0-9]{2}/[0-9]{4}'), Validators.required]]
    });
  }

  submitAjout() {
    let date = this.formuChien.value.dateNaissance.split('/');
    let chien = new Chien();
    chien.nom = this.formuChien.value.nom;
    chien.race = this.formuChien.value.race;
    chien.dateNaissance = new Date(date[2], date[1]-1, date[0]);
    
    this.onAjout.emit(chien);
    
  }

}
