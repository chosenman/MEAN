import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from '../http.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subscription: Subscription;

  products = [ ]

  constructor(
    private _productService: ProductService
  ) {
    this.subscription = _productService.observedProducts.subscribe(
      (products) => this.products = products,
      (err) => {},
      () => {}
    );
  };

  delete(id){
    this._productService.deleteProduct(id)
  }

  changeData(){
    this._productService.updateProducts(
      {email: "oscar@oscar.com"}
    );
    // console.log(this._productService.products);
    //
    // // this.products = [];
    // this.products.push("SOMETHING");
    // // this.products.push({email: "change@data.com"})
    // // console.log(this.products);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
