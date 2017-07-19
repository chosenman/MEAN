import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  success = false;
  user = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    repassword: '',
    street_address:'',
    Unit_appt:'',
    City:'',
    State:'',
    lucky: '',
  };



onsubmit(){
  this.success = true
};






  switch: Array<boolean> = [true,true,true,false,true,true,true,true];
  changeSwitch(elem){
    if(this.switch[elem]){
      this.switch[elem]=false
    } else{
      this.switch[elem]=true
    };
  }
}
