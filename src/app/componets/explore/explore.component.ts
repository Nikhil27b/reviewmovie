import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  peliculas: object[];
  data = null;
  query: string = '';
  loading: any;
  detail: object = null;

  //To store Movie Details & User Review

  title: string;
  reldate: string;
  overview: string;
  vote: string;
  userreview: string;
  user = null;

  constructor(
    private db: AngularFireDatabase,
    private movieService: MovieService,
    private auth: UserService
  ) {
    this.auth.getUser().subscribe((user) => {
      this.user = user.uid;
    });
  }
  ngOnInit() {}
  onEnter(query: string) {
    this.loading = true;
    this.movieService.getSearchMovies(query).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.peliculas = this.data['results'];
      this.loading = false;
    });
  }

  movieDetails(id: number) {
    console.log('Button Clicked');
    this.movieService.getMoviesById(id).subscribe((res) => {
      console.log(res);
      this.detail = res;
      this.loading = false;
    });
  }

  onSubmit() {
    const uid = uuidv4();
    this.db.object(`/review/${uid}`)
    .set({
      id: this.user,
      title: this.title,
      // date: this.reldate,
      // overview: this.overview,
      // imdvote: this.vote,
      userreview: this.userreview,
    }).then((res)=>{
      console.log(res);
      console.log("Review Submited");
    })  .catch((err) => {
    console.log("Error for submiting" +err)
    });
  }
}
