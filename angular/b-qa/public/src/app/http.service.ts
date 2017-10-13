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
  // // Questions ////
  // ////////////////////////
  showQuestions(){
    return this._http.get("/questions")
    .map( data => data.json() )
    .toPromise();
  };
  newQuestion(question){
    return this._http.post("/question/new", question)
    .map( data => data.json() )
    .toPromise();
  }

  like(answer){
    return this._http.post("/answer/like", answer)
    .map( data => data.json() )
    .toPromise();
  }
  showQuestion(question){
    return this._http.post("/question/show", question)
    .map( data => data.json() )
    .toPromise();
  }


  newAnswer(answer){
    return this._http.post("/question/answer", answer)
    .map( data => data.json() )
    .toPromise();
  }

  searchForm(question){
    return this._http.post("/question/search", question)
    .map( data => data.json() )
    .toPromise();
  }
// ////////////////////////
// // login reg ////
// ////////////////////////

  enter(user){
    return this._http.post("/user/login", user)
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
