import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from '../../http.service';

import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  subscription: Subscription;

  products = [ ];
  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    // _productService.updateProducts(this.products);
    this.subscription = _productService.observedProducts.subscribe(
      products => this.products = products,
      (err) => {},
      () => {}
    );
  };
  newRecord ={
      title: null,
      price: null,
      img: null
  }

  changeData(){
    this._productService.updateProducts(
      {
        title: this.newRecord.title,
        price: this.newRecord.price,
        img: this.newRecord.img
      }
    );
    this.router.navigate(['/products'])
  }
  // this.router.navigate('./')
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
