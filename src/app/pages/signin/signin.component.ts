import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  submitted = false;

  constructor(private auth: UserService, private route :Router) {}

  ngOnInit(): void {
   
  }

  async onLogin(l: NgForm) {
    const { email, password } = l.form.value;
    try {
      await this.auth.signin(email,password);
      this.route.navigateByUrl("/")
    } catch (error) {
      console.log(error);
    }
  }
}
