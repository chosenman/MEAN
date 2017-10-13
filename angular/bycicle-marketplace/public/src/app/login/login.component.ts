import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
// import { Subscription } from "rxjs/Subscription";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  db_user = null;

  subscriptionId: Subscription;
  id = null;
  updatableRecord = null;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = _httpService.observedUser.subscribe(
      (user) => this.db_user = user,
      (err) => {},
      () => {}
    );
    this.subscriptionId = this._route.params.subscribe(
      (param) => {
        this.id = param.id;
        // this.updatableRecord = this.recordFunct();
        console.log(this.id)
      },
      (err) => {},
      () => {}
    );
  };

  user = {
    email: '',
    password: ''
  }
  answer = "";

  login(){
    this._httpService.login(this.user)
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
        this.answer = "Invalid Credentials"
      } else {
        console.log("user ID object")
        console.log(data.user)
        this._httpService.updateUser(data.user)
        this.id = data.user._id
        // this.db_user = data.user;
        var url = '/browse/'+ data.user._id
        console.log(url)
        this.router.navigate([url])
      }

     } )
    .catch( err => {
      console.log("on .CATCH login.component")
      console.log(err);
    })
  }



  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
