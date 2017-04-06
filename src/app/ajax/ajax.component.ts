import { Component, OnInit } from '@angular/core';
import { PremierAjaxService } from '../shared/premier-ajax.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  message:string;
  liste:string[];
  nouvelItem:string;

  constructor(private ajaxService:PremierAjaxService) { }

  ngOnInit() {
    this.ajaxService.getListe().subscribe((data) => this.liste = data);
  }

  getMessage() {
    this.ajaxService.getMessage()
    .subscribe((reponse) => this.message = reponse.message);
  }

  ajouterItem() {
    this.ajaxService.addToListe(this.nouvelItem)
      .subscribe((data) => {
        this.ngOnInit();
        alert(data);
      });
  }

}
