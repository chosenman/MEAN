import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() getinPower;

  _power = null
  message='';

  ngOnChanges(){
    this.message = ''
    this._power = this.getinPower * 250;
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

  constructor() {}

  ngOnInit() {}
  // 100 * 250 = 25000
  // Superlative
}
