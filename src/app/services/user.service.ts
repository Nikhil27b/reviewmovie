import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";

import {UserInfo} from "src/app/model/users";
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // postCollection: AngularFirestoreCollection<UserInfo>;
  constructor(private db :AngularFirestore, private auth: AngularFireAuth) {
    // this.postCollection = this.db.collection("users" ,(res) =>
    // res.orderBy("asc")
    // )
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.auth.authState;
  }
  signOut() {
    return this.auth.signOut();
  }

  //Add User


}
