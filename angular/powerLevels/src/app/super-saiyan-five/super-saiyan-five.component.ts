import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-five',
  templateUrl: './super-saiyan-five.component.html',
  styleUrls: ['./super-saiyan-five.component.css']
})
export class SuperSaiyanFiveComponent implements OnInit {
  @Input() getinPower;

  _power = null
  message='';

  ngOnChanges(){
    this.message = ''
    this._power = this.getinPower * 500;
    if (this._power > 9000 && this._power <= 20000) {
      this.message = 'Over 9000!'
    }
    if(this._power > 20000){
      this.message = 'Superlative!'
    }
    if(this._power == 25000){
      this.message = 'Superlative Powers!'
    }
    if(this._power == 50000){
      this.message = 'THE ONE'
    }
  }



  @Output() myEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  callParrent(){
    this.myEvent.emit(7)
  }
  myValue = '';
}
