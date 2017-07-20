import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveTasks(user) {
    return this._http.get(user).map( data=>data.json() ).toPromise()
  }

}
