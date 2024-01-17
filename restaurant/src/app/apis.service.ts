import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private _HttpClient: HttpClient) { }

  getPizza(): Observable<any> {
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
  }

  getPasta():Observable<any>
  {
   return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pasta'); 
  }
  getBeef():Observable<any>
  {
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=beef') ; 
  }

  getSalad():Observable<any>
  {
    return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=salad'); 
  }

}
