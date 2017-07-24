import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';

import { HttpService } from './http.service'

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: "allnotes", component: NotesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
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
