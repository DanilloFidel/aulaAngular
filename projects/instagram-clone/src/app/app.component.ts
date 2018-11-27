import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private config = {
    apiKey: "AIzaSyBSKY0-s52Vv0kWasLdquNtgUpJwmpfWBI",
    authDomain: "jta-instagram-clone-2c6d2.firebaseapp.com",
    databaseURL: "https://jta-instagram-clone-2c6d2.firebaseio.com",
    projectId: "jta-instagram-clone-2c6d2",
    storageBucket: "jta-instagram-clone-2c6d2.appspot.com",
    messagingSenderId: "313311069401"
  };

  ngOnInit(): void{
    firebase.initializeApp(this.config)
  }
}
