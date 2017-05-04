import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../convert.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  maDate:Date;
  devises:Observable<string[]>;
  resultat:number;
  from:string;
  to:string;
  valeur:number = 0;
  constructor(private convert:ConvertService) {
    this.maDate = new Date(2002, 10, 15);
   }

  ngOnInit() {
    this.devises = this.convert.getDevises();
  }

  convertir():void {
    this.convert.convertir(this.from, this.to, this.valeur)
    .subscribe((data) => this.resultat = data);
  }

}
