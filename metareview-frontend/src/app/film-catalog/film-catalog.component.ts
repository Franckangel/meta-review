import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { FilmDetailsComponent } from "../film-details/film-details.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-film-catalog',
    standalone: true,
    templateUrl: './film-catalog.component.html',
    styleUrl: './film-catalog.component.css',
    imports: [FilmDetailsComponent, CommonModule]
})
export class FilmCatalogComponent {
  films: any;
  filter: string = "";

  constructor(private filmService : FilmService){
      this.filmService.getAllFilms().subscribe(films => {
        this.films = films;
      });
  }

  getFilteredFilm() {
    return this.filter === '' ? this.films : this.films.filter((film: any) => {
      const genresArray = film.genre.split(',').map((genre: string) => genre.trim());
      return genresArray.includes(this.filter);
    });
  }




}
