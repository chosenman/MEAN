import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";

@Injectable()
export class HttpService {
  db_user = null;

  observedUser = new BehaviorSubject(this.db_user);

  constructor(private _http: Http) { }

  // ////////////////////////
  // // Bycicles ////
  // ////////////////////////
  showBikes(){
    return this._http.get("/bikes")
    .map( data => data.json() )
    .toPromise();
  };
  newBike(bike){
    return this._http.post("/bikes/new", bike)
    .map( data => data.json() )
    .toPromise();
  }

// ////////////////////////
// // login reg ////
// ////////////////////////
  login(user){
    return this._http.post("/user/login", user)
    .map( data => data.json() )
    .toPromise();
  };

  register(user){
    return this._http.post("/user/register", user)
    .map( data => data.json() )
    .toPromise();
  }
  // ////////////////////////
  // // update user ////
  // ////////////////////////
  updateUser(user){
    this.db_user = user;
  }

}
