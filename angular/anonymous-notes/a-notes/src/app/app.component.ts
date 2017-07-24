import { Component } from '@angular/core';

import { HttpService } from './http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private _httpService: HttpService) {}
  notes = [];

  retrieveAll(){
    this._httpService.retrieveAll()
    .then( data => {
      console.log("Data from retrieveAll function: " + data)
      this.notes = data;
     } )
    .catch( err => {
      console.log("on .CATCH")
      console.log(err);
    })
  }

  newNote(){
    console.log(" -------------------- ")
    console.log(this.note)
    console.log(" before sending newNote")
    this._httpService.newNote(this.note)
    .then( data => {
      console.log("Data from newNote function: " + data)
     } )
    .catch( err => {
      console.log("on .CATCH")
      console.log(err);
    })
    this.retrieveAll()
  }

  ngOnInit() {
    this.retrieveAll()
  }

  title = 'app';

  note = {
    text: "",
    date: new Date,
  };


}
