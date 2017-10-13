import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }
  name = this._httpService.readUser()
  question = {
    text: '',
    o1: "",
    o2: "",
    o3: "",
    o4: "",
    o5: ""
  }

  newQuestion(){
    this._httpService.questionNew({
      name: this.name,
      text: this.question.text,
      o1: this.question.o1,
      o2: this.question.o2,
      o3: this.question.o3,
      o4: this.question.o4
    })
    .then( data => {
      console.log("Data from login function: ")
      console.log(data.status)
      this.router.navigate(['/questions'])
     } )
    .catch( err => {
      console.log("on .CATCH register.component")
      console.log(err);
    })
  }


  ngOnInit() {
  }

}
