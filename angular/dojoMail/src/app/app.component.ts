import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  value = 190;
  user = {
		firstName: 'Darth',
		lastName: 'Vader'
	};
  amount = 1.20;
  today = new Date();
  myBool: boolean = true;
  myArr: Array<number> = [1,2,3,4,5,6];

  listofEmails: Array<any> = [
    {email: "gla@gmail.com", importance: true, subject: "New Windows", content: "Windows XP bla bla"},
    {email: "a@yandex.ua", importance: false, subject: "Programming", content: "Learn Java! This is..."},
    {email: "Marry@mail.RU", importance: true, subject: "Bla bla bla", content: "Listen ...." },
    {email: "Michael@jordan.COM", importance: false, subject: "Programming", content: "New offer" }
  ]
}
