import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConvertService {
  private urlWs:string = 'http://api.fixer.io/latest';

  constructor(private http:Http) { }

  convertir(from:string,to:string, valeur:number):Observable<number> {
    return this.http.get(this.urlWs+'?base='+from)
            .map((response) => response.json())
            .map((data) => valeur * data.rates[to]);
  }

  getDevises():Observable<string[]> {

    return this.http.get(this.urlWs+'?base=EUR')
    .map((response) => response.json())
    .map((data) => ['EUR', ...Object.getOwnPropertyNames(data.rates)]);
  }
  
}
