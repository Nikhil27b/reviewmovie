import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http : HttpClient) { }

  getSearchMovies(query:string):Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=09e6cf9871795d48bba7c9be1465ff3e&language=en-US&query=${query}`);
  }


  getMoviesById(id:number):Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=09e6cf9871795d48bba7c9be1465ff3e
    `)
  }
}
