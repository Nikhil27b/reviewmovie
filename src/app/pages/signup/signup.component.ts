import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: UserService, private route :Router, private db : AngularFireDatabase) { }

  ngOnInit(): void {
  }
  async onReg(l: NgForm) {
    const {name, email, password } = l.form.value;
    const res =  await this.auth.signup(email,password);
    const uid = res.user.uid;

    await this.db.object(`/users/${uid}`).set({
      id:uid,
      name:name,
      email:email,
      timestamp:Date.now(),
    })
 
    this.route.navigateByUrl("/")
    } catch (error) {
      console.log(error);
    }
  }


