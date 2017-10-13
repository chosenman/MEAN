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
  id = null;
  subscriptionId: Subscription;
  question = '';
  voted_option = '';

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
  }

  vote(val){
    this._httpService.optionVote({
      voted_option: val,
      id:this.id
    })
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
       console.log(data.message)
      } else {
        this.ngOnInit()
      }

     } )
    .catch( err => {
      console.log("on .CATCH vote ")
      console.log(err);
    })
  }

  ngOnInit() {
    this._httpService.questionShow({id:this.id})
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)
      console.log(data.qustion)

      if(!data.status){
        console.log(data.message)
      } else {

        this.question = data.question
      }

     } )
    .catch( err => {
      console.log("on .CATCH questions all  component")
      console.log(err);
    })
  }

}
