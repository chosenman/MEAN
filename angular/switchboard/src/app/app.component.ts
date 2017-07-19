import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';


  switch: Array<boolean> = [true,true,true,false,true,true,true,true];


  changeSwitch(elem){

    if(this.switch[elem]){
      this.switch[elem]=false
    } else{
      this.switch[elem]=true
    };
  }



}
