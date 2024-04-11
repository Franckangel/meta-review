import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

const APIUrlFilm = "http://localhost:8080/api/film";
@Injectable({
  providedIn: 'root'
})
export class FilmService extends DataService{

  constructor(http: HttpClient) {
    super(APIUrlFilm, http);
   }
}
