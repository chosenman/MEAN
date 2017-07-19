import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();
  title = 'US Time Zone Display';
  clear(){
    // document.getElementsByTagName('h1')[1].innerHTML=''
    this.time_ = ''
    this.resetbuttons()
  };
  now = new Date().toISOString() ;
  PST = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  MST = new Date().toLocaleString("en-US", {timeZone: "America/Phoenix"});
  CST = new Date().toLocaleString("en-US", {timeZone: "America/Monterrey"});
  EST = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  time_ = this.now;
  showTime( timezone, event ){
    // document.getElementsByTagName('h1')[1].innerHTML=this[timezone]
    this.time_ = this[timezone];
    console.log(event.target.className)
    this.resetbuttons()
    event.target.className += " active";
  };
  switch: boolean = false;
  resetbuttons(){
    var allbarblks = document.getElementsByClassName("barblock")

    for(var i=0; i < allbarblks.length; i++) {
      allbarblks[i].className = "barblock";
    }
  }

}
