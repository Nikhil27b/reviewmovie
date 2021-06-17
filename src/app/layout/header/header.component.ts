import { Component, OnInit } from '@angular/core';
import {UserService} from "src/app/services/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email = null;


  constructor(private auth:UserService,private route : Router ) {
    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
   }

  ngOnInit(): void {
  }
  handlesignOut() {
    try {
      this.auth.signOut();
      this.route.navigateByUrl('/signin');
      this.email = null;
    } catch (error) {
      console.log(error);
    }
  }

}
