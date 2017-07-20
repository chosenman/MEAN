import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote = {
    text: '',
    author: ''
  }

  quote_ = {
    text: "",
    author: ""
  }

  onsubmit(){
    this.quote_.text = this.quote.text;
    this.quote_.author = this.quote.author;
    this.quote.text = '';
    this.quote.author = '';
    console.log('form was submitted "' + this.quote_.text + "', by: " + this.quote_.author)
  }
  invoce(event){
    console.log('invoced' + event)
  }
  constructor() { }

  ngOnInit() {
  }

}
