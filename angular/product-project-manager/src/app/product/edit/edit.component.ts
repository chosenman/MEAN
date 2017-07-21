import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductService } from '../../http.service';

import { Router, ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // subscribe = null;
  subscription: Subscription;
  subscriptionId: Subscription;

  products = [ ];
  id = null;
  updatableRecord = null;
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
    this.subscriptionId = this._route.params.subscribe(
      (param) => {
        this.id = param.id;
        this.updatableRecord = this.recordFunct();
        console.log(this.id)
      },
      (err) => {},
      () => {}
    );
  };

  updateData(){
    this._productService.changeProduct(
      this.id,
      {
        title: this.updatableRecord.title,
        price: this.updatableRecord.price,
        img: this.updatableRecord.img
      }
    );
    this.router.navigate(['/products'])
  }

  delete(){
    console.log(this.id);
    this._productService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
  // updatableRecord = this.recordFunct();
  recordFunct(){
    console.log(this.products)
    if (this.products.length > 0) {
       return  this.products[this.id];
     } else {
       return 0;
     }
  }


  // constructor(private _route: ActivatedRoute) {
  //   this.subscribe = this._route.params.subscribe((param)=>{
  //     console.log("EditComponent loaded and url id given is: ", param.id);
  //   })
  // }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    //  this._route.params.unsubscribe(); // sample unsubscribe
    // this.subscribe.unsubscribe(); // sample unsubscribe
  }


  //
  ngOnInit() {
  }

}
