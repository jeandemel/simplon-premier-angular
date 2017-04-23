import {ChienService} from '../../shared/chien.service';
import {Chien} from '../../shared/chien';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-liste-chien',
  templateUrl: './liste-chien.component.html',
  styleUrls: ['./liste-chien.component.css']
})
export class ListeChienComponent implements OnInit {
  chiens:Observable<Chien[]>;

  constructor(private chienService:ChienService) { }

  ngOnInit() {
    this.chiens = this.chienService.getAllChiens();
  }

  ajouterChien(chien:Chien) {
    this.chienService.addChien(chien).subscribe();
    this.ngOnInit();
  }

}
