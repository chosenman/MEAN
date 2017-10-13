import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
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
question = "";
allanswers = [];

answerQuestion= {
  a: "",
  details: ""
}


newAnswer() {
  this._httpService.newAnswer({
    q_id:this.q_id,
    user_id: this.id,
    answer: this.answerQuestion.a,
    details: this.answerQuestion.details
  })
  .then( data => {
    console.log("Data from login function: ")
    console.log(data.status)

    if(!data.status){
      this.answer = data.message;
    } else {
      var url = '/browse/'+ this.id
      console.log(url)
      this.router.navigate([url])
    }

   } )
  .catch( err => {
    console.log("on .CATCH register.component")
    console.log(err);
  })
  console.log("show question")
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
