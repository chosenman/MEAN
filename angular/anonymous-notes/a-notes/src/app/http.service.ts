import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveAll() {
    return this._http.get(`/notes`)
    .map( data => data.json() )
    .toPromise();
  }

  newNote(note) {
    return this._http.post(`/notes`, note)
    .map( data => data.json() )
    .toPromise();
  }


}
