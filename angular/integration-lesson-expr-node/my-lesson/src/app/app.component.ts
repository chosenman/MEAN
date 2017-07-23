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
  // subscription: Subscription;

  constructor( private _httpService: HttpService ) {}

  retrieveAll(){
    this._httpService.retrieveAll()
    .then( data => { console.log("Data from retrieveAll function: " + data) } )
    .catch( err => {
      console.log("on .CATCH")
      console.log(err);
    })
  }



  title = 'app';
}
