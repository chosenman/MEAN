import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs';

@Injectable()
export class ProductService {
  products = [];

  observedProducts = new BehaviorSubject(this.products);

  findProducts(){
    return this.products;
  }

  updateProducts(product: any) {
    this.products.push(product);
    // this.observedProducts.next(this.products);
  }

  changeProduct(id, changedProduct: any) {
    this.products[id] = changedProduct;
    // this.observedProducts.next(this.products);
  }

  deleteProduct(id) {
    // array.splice(index, 1);
    this.products.splice(id, 1);
    // this.observedProducts.next(this.products);
  }

  constructor() { }



}
