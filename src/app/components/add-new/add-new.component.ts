import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  add(user, userLast) {
    console.log('si');
    firebase.database().ref('users/').push({
      Name: user,
      Surname: userLast
    });
    this.router.navigate(['home']);
  }

  back() {
    this.router.navigate(['home']);
  }
}
