import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  subscription: Subscription;
  db_user = null;

  subscriptionId: Subscription;
  subscription_q_Id: Subscription;
  id = null;
  q_id = null;
  // updatableRecord = null;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.subscriptionId = this._route.params.subscribe(
      (param) => {
        this.id = param.id;
        // this.updatableRecord = this.recordFunct();
        console.log(this.id)
      },
      (err) => {},
      () => {}
    );
    this.subscription_q_Id = this._route.params.subscribe(
      (param) => {
        this.q_id = param.q_id;
        // this.updatableRecord = this.recordFunct();
        console.log(this.q_id)
      },
      (err) => {},
      () => {}
    );
  };

answer = '';

question = {};
allanswers = [];

  like(id) {
    console.log("id: "+id)
    this._httpService.like({
      q_id: id
    })
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
        this.answer = "Something went wrong"
      } else {

       console.log("liked")
      }

     } )
    .catch( err => {
      console.log("on .CATCH show.component, while like")
      console.log(err);
    })
    console.log("show question")

    this.showQuestion()
  }

  showQuestion(){
    this._httpService.showQuestion({ q_id:this.q_id })
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
        this.answer = "Something went wrong"
      } else {

        this.question = data.question;
      }

     } )
    .catch( err => {
      console.log("on .CATCH register.component")
      console.log(err);
    })
    console.log("show question")
  }


  ngOnInit() {
    this.showQuestion()
  }
  ngOnDestroy(){
    this.subscriptionId.unsubscribe();
    this.subscription_q_Id.unsubscribe();
  }

}
