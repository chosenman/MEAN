import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks = [];
  constructor(private _httpService: HttpService){}

  getTasks(user){
    this._httpService.retrieveTasks(user)
    .then( tasks => {
      this.message = ``;
      console.log("on .THEN")
      this.tasks = tasks;
      console.log(this.tasks)
      this.score = parseInt(tasks.followers) + parseInt(tasks.public_repos);
      if(this.score < 20) {
        this.message = "Needs Work"
        this.color = 'red'
      } else if(this.score >= 20 && this.score < 50){
        this.message = "A decent start"
        this.color = 'orange'
      } else if(this.score >= 50 && this.score < 100){
        this.message = "Doing good!"
         this.color = 'black'
      } else if(this.score >= 100 && this.score < 200){
        this.message = "Great job!"
        this.color = 'green'
      } else if(this.score >= 200){
        this.message = "Github Elite!"
        this.color = 'blue'
      }

    })
    .catch( err => {
      console.log("on .CATCH")
      console.log(err);
    })
  }

  title = 'GigHub Score';
  score:number = 0;
  user ='';
  url ="https://api.github.com/users/";
  githubUser ='';
  response = null;
  onclick(){

    this.url +=this.githubUser;
    this.getTasks(this.url);
    this.url ="https://api.github.com/users/";
    console.log(this.tasks)
    // this.score = this.tasks.followers + this.tasks.public_repos;
    // if()


  }

  message = ''
  color = ''
}
