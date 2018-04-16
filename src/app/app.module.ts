import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app/routes/app.routes/app.routes.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddNewComponent } from './components/add-new/add-new.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';



// Esto habría que sacarlo a un .env para que no sea público,
// pero se mantiene aquí por motivos de facilidad lectora.

export const firebaseConfig = {
  apiKey: 'AIzaSyCXmbIqHNnPczedMvF1opqlmAPoCDpQUiw',
  authDomain: 'userlist-3b.firebaseapp.com',
  databaseURL: 'https://userlist-3b.firebaseio.com',
  projectId: 'userlist-3b',
  storageBucket: 'userlist-3b.appspot.com',
  messagingSenderId: '649269537068'
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
