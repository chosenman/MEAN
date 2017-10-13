import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './http.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NewComponent } from './question/new/new.component';
import { ShowComponent } from './question//show/show.component';
import { EnterComponent } from './enter/enter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    NewComponent,
    ShowComponent,
    EnterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
