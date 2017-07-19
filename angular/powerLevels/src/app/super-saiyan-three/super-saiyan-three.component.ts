import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() getinPower;

  _power = null
  message='';

  ngOnChanges(){
    this.message = ''
    this._power = this.getinPower * 150;
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



  constructor() { }

  ngOnInit() {
  }

  // 100 * 150 = 1500
  // Over 9000!
}
