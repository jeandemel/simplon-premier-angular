import {Response, Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {Chien} from './chien';

@Injectable()
export class ChienService {
  private urlWs:string = 'http://localhost:9090/chiens/';

  constructor(private http:Http) { }

  getAllChiens():Observable<Chien> {
    return this.http.get(this.urlWs+'/all').map((reponse:Response) => reponse.json());

  }

  addChien(chien:Chien) {
    return this.http.post(this.urlWs+'/ajout', chien).map((reponse:Response) => {
      
    });
  }

}
