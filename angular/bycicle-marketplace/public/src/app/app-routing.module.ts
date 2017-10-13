import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BikeComponent } from './bike/bike.component';
import { NewComponent } from './bike/new/new.component';
import { EditComponent } from './bike/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './bike/listings/listings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: "browse/:id", component: BikeComponent },
  { path: "listings/:id", component: ListingsComponent }
  // {
  //   path: '',
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
