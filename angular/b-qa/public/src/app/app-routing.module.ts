import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';

import { QuestionComponent } from './question/question.component';
import { NewQuestionComponent } from './question/new/new.component';

import { HomeComponent } from './home/home.component';

import { ShowComponent } from './question/show/show.component';
import { AnswerComponent } from './question/answer/answer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: "browse/:id", component: QuestionComponent },
  { path: "browse/:id/new", component: NewQuestionComponent },

  { path: "showquestion/:q_id/byuser/:id", component: ShowComponent },
  { path: "answerquestion/:q_id/byuser/:id", component: AnswerComponent },


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
