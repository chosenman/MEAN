import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BikeComponent } from './bike/bike.component';
import { NewComponent } from './bike/new/new.component';
import { EditComponent } from './bike/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './bike/listings/listings.component';

import { HttpService } from './http.service'

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BikeComponent,
    NewComponent,
    EditComponent,
    HomeComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
