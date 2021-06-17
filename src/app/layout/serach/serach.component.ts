import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import {MovieService} from "src/app/services/movie.service";
@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  public peliculas: object[];

  constructor(   private router: Router
    ) { }

  ngOnInit(): void {
  }


  onEnter(query) {
    this.router.navigate(['/search/movie/' + query])
  }
}
