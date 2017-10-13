import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }

  name = this._httpService.readUser()

  searchFform = {
    query: "",
  };

  questions = null;



  delete(val){
    this._httpService.delete({
      id: val
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



  search(){
    console.log(this.questions);
    var results = [];
        for (let i = 0; i < this.questions.length; i++) {
            if(this.questions[i].question.indexOf(this.searchFform.query) != -1){
              results.push(this.questions[i])
            }
        }
        console.log(results)
        this.questions = results;
  }




  ngOnInit() {
    this._httpService.questionAll()
    .then( data => {
      console.log("Data from all questions function: ")
      console.log(data.status)

      if(!data.status){
        console.log(data.message)
      } else {

        this.questions = data.question
      }

     } )
    .catch( err => {
      console.log("on .CATCH questions all  component")
      console.log(err);
    })
  }

}
