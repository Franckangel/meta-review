import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Film } from '../models/film';

const APIUrlFilm = 'http://localhost:8080/api/film';
@Injectable({
  providedIn: 'root',
})
export class FilmService extends DataService {
  //films: any;

  constructor(http: HttpClient) {
    super(APIUrlFilm, http);
    //this.films = super.getAll();
  }

  //#Test methods
  /*getFilmById(id: number): Observable<Film | undefined> {
    const film = this.films.find((f: { id: number; }) => f.id === id);
    return of(film);
  }

  getAllFilms(): Observable<Film | undefined>{
    return of(this.films);
  }*/
}
