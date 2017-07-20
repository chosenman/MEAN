import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inPower = "";
  inPower_ = "";

  invoce(event){
    console.log('invoced' + event)
  }
  // char = {
  //   inPower: ""
  // };
  onsubmit(){
    this.inPower_ = this.inPower;
    this.calculate_message = 'you clicked!'
  };
  calculate_message = ''
}
