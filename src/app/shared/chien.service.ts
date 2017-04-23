import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Chien } from './chien';

@Injectable()
export class ChienService {
  private urlWs: string = 'http://localhost:3000/chiens';

  constructor(private http: Http) { }

  getAllChiens(): Observable<Chien[]> {
    return this.http.get(this.urlWs)
      .map((reponse: Response) => {
        let chiens:Chien[] = <Chien[]>reponse.json();
        chiens.forEach(chien => chien.dateNaissance = new Date(chien.dateNaissance));
        return chiens;
      });
      
  }

  addChien(chien: Chien) {
    return this.http.post(this.urlWs, {
      nom: chien.nom,
      race: chien.race,
      dateNaissance: chien.dateNaissance.getTime()
    }).map((reponse: Response) => {
      console.log(reponse);
    });
  }

}
