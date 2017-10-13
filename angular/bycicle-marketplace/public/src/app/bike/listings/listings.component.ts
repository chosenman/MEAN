import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  subscription: Subscription;
  subscriptionId: Subscription;

  db_user = null;
  id = null;

  newBike = {
    img: "http://la-sovereign.com/wp-content/uploads/2016/11/24cliff-800x500.jpg",
    title: "",
    description: "",
    price: "",
    location: "",
    user_id: ""
  }

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
        this.newBike.user_id = param.id;
        // this.updatableRecord = this.recordFunct();
        console.log(this.newBike.user_id)
      },
      (err) => {},
      () => {}
    );
  };

  ngOnInit() {
  }



  createNewBike() {
    if(this.newBike.user_id!=null) {
        this._httpService.newBike(this.newBike)
        .then( data => {
          console.log("Data from show Bike creation event: ")
          console.log(data)

          // this.allbikes = data;

        } )
        .catch( err => {
          console.log("on .CATCH listings.component")
          console.log(err);
        })
        console.log("bike created")
    } else {
      console.log("error, we have this.newBike.user_id " + this.newBike.user_id)
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
