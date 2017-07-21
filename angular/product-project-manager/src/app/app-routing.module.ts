import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { NewComponent } from './product/new/new.component';
import { EditComponent } from './product/edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/new', component: NewComponent },
  { path: 'products/edit/:id', component: EditComponent },
  // <a [routerLink]="['/products','edit', edit.id]">Product Creation</a>
  // {   path: '', children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
