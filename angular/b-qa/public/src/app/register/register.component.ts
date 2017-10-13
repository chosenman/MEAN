import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  }
  // db_user = {};
  user = {
    name: ""
  };
  answer = "";

  enter() {
    this._httpService.enter(this.user)
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
        this.answer = "Something went wrong"
      } else {
        // this.db_user = data.user;
        // this._httpService.updateUser(data.user)
        this.id = data.user._id;

        var url = '/browse/'+ data.user._id
        console.log(url)
        this.router.navigate([url])
      }

     } )
    .catch( err => {
      console.log("on .CATCH register.component")
      console.log(err);
    })
    console.log("gegister")
  }
  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscriptionId.unsubscribe();
  }

}
