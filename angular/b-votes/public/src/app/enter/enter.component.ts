import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})

export class EnterComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }
  name = null

  enter(){
    this._httpService.updateUser(this.name)
    this.router.navigate(["/questions"])
  }

  ngOnInit() {



  }

}
