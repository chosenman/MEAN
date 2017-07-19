import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  switch = getRandomColor;
  form = {
    name: "",
    email: "",
    password: ""
  };
  onsubmit(){
    document.getElementsByClassName('myForm')[0].innerHTML ="yuou just submitted: " + this.form.name;
    this.form = {
      name: this.form.name,
      email: this.form.email,
      password: this.form.password
    }
  }

}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
