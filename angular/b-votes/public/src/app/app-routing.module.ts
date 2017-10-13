import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NewComponent } from './question/new/new.component';
import { ShowComponent } from './question//show/show.component';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EnterComponent },
  { path: "questions", component: QuestionComponent },
  { path: "questions/new", component: NewComponent },
  { path: "questions/show/:id", component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
