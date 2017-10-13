import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { QuestionComponent } from './question/question.component';
import { NewQuestionComponent } from './question/new/new.component';

import { HomeComponent } from './home/home.component';


import { HttpService } from './http.service'

import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from './question/show/show.component';
import { AnswerComponent } from './question/answer/answer.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,

    RegisterComponent,

    QuestionComponent,
    NewQuestionComponent,

    HomeComponent,

    ShowComponent,

    AnswerComponent

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
