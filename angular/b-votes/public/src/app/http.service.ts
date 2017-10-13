import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";

@Injectable()
export class HttpService {
  userName = null;

  constructor(private _http: Http) { }

  updateUser(user){
    this.userName = user;
  };
  readUser(){
    return this.userName;
  };

  questionAll(){
    return this._http.get("/question/all")
    .map( data => data.json() )
    .toPromise();
  };

  questionNew(data){
    return this._http.post("/question/new", data)
    .map( data => data.json() )
    .toPromise();
  };

  questionShow(data){
    return this._http.post("/question/show",data)
    .map( data => data.json() )
    .toPromise();
  };

  delete(data){
    return this._http.post("/question/delete",data)
    .map( data => data.json() )
    .toPromise();
  };

  optionVote(data){
    return this._http.post("/option/vote",data)
    .map( data => data.json() )
    .toPromise();
  };

}
