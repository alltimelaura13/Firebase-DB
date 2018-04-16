import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { ListComponent } from './components/list/list.component';


// Esto habría que sacarlo a un .env para que no sea público,
// pero se mantiene aquí por motivos de facilidad lectora.
// Tu tambien dejalo aquí pero añade el comentario que he puesto arriba
export const firebaseConfig = {
  apiKey: 'AIzaSyCXmbIqHNnPczedMvF1opqlmAPoCDpQUiw',
  authDomain: 'userlist-3b.firebaseapp.com',
  databaseURL: 'https://userlist-3b.firebaseio.com',
  projectId: 'userlist-3b',
  storageBucket: 'userlist-3b.appspot.com',
  messagingSenderId: '649269537068'
};


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [ // no te olvides de añadir todos estos imports, ni de ponerlos arriba
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
