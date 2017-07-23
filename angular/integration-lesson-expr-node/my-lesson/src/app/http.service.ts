import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get(`/products`)
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get(`/products/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  create(product) {
    return this._http.post(`/products`, product)
    .map( data => data.json() )
    .toPromise();
  }
  update(product, id) {
    return this._http.put(`/products/${id}`, product)
    .map( data => data.json() )
    .toPromise();
  }
  // destroy(id) {
  //   return this._http.put(`/products/${id}`)
  //   .map( data => data.json() )
  //   .toPromise();
  // }
}
