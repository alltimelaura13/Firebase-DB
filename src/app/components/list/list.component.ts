import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

// IMPORTANTE AÑADIR ESTOS IMPORTS, SOBRE TODO EL ULTIMO, O DA PETE


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

// funcion de añadir algo, en este caso, te crea una DB llamada 'users/'
// y ahi te va añadiendo lo que le digas, en ese caso, añade 'manolo',
// pero tendrás que añadir ahi una variable que captures del input,
// para que añada el campo input y no un valor fijo

  add(user, userLast) {
    console.log('si');
    firebase.database().ref('users/').push({
      Name: user,
      Surname: userLast
    });
  }
}
