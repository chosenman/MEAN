import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-guote-list',
  templateUrl: './guote-list.component.html',
  styleUrls: ['./guote-list.component.css']
})
export class GuoteListComponent implements OnInit {
  @Input() newQuoteText;
  @Input() newQuoteAuthor;

  _quote = function(text,author){
    this.text = text,
    this.author = author,
    this.votes = 0
  }
  all_quotes =[]

  upwote(i){
    this.all_quotes[i].votes++
  }
  downwote(i){
    if(this.all_quotes[i].votes>0){
      this.all_quotes[i].votes--
    }
  }
  delete(i){
    this.all_quotes.splice(i, 1)
  }

  ngOnChanges(){
    if (this.newQuoteText && this.newQuoteAuthor){
      console.log(this.newQuoteText, this.newQuoteAuthor)

      this.all_quotes.push(new this._quote(this.newQuoteText, this.newQuoteAuthor))

      console.log(this.all_quotes)
    }
  }

  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
