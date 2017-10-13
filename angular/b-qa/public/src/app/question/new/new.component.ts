import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewQuestionComponent implements OnInit {
  subscription: Subscription;
  db_user = null;
  user = null;

  answer = "";
  subscriptionId: Subscription;
  id = null;

  question= {
    q: "",
    details: ""
  }
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

  newQuestion(){
    this._httpService.newQuestion(this.question)
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)

      if(!data.status){
        this.answer = data.message
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
    console.log("new question")
  }


  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscriptionId.unsubscribe();
  }
}
