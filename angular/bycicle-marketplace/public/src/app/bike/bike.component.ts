import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
    subscription: Subscription;
    db_user = null;

    subscriptionId: Subscription;
    id = null;
    // updatableRecord = null;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = _httpService.observedUser.subscribe(
      (user) => this.db_user = user,
      (err) => {console.log("subscription error")},
      () => {console.log("subscription error 2")}
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

answer = '';
allbikes = [];

  showAllBikes(){
    this._httpService.showBikes()
    .then( data => {
      console.log("Data from show all bikes function: ")
      console.log(data)

        this.allbikes = data;

     } )
    .catch( err => {
      console.log("on .CATCH showAllBikes.component")
      console.log(err);
    })
  }

  ngOnInit() {
    // this.
    this.showAllBikes()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
