import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveForecastk(city) {
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?APPID=29563f2a992926c951390aa78c4b2a2e&q=" + city).map( data=>data.json() ).toPromise()
  }
}
