import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-bike',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
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
  };

answer = '';
allquestions = null;

searchFform = {
  query: "",
};

  search(){
    var results = [];
        for (let i = 0; i < this.allquestions.length; i++) {
            if(this.allquestions[i].question.indexOf(this.searchFform.query) != -1){
              results.push(this.allquestions[i])
            }
        }
        this.allquestions = results;
  }

  showAllQuestions(){
    this._httpService.showQuestions()
    .then( data => {
      console.log("Data from show all question function: ")
      console.log(data)

        this.allquestions = data;

     } )
    .catch( err => {
      console.log("on .CATCH showAllBikes.component")
      console.log(err);
    })
  }

  ngOnInit() {
    // this.
    this.showAllQuestions()
  }

  ngOnDestroy(){
    this.subscriptionId.unsubscribe();
  }

}
