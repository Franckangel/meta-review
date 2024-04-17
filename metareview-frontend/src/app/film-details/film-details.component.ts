import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../models/film';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css',
})
export class FilmDetailsComponent {
  @Input() film: Film | undefined;
  @Output() addReview = new EventEmitter();

  constructor(private router: Router) {}

  getFilmUrl(film: Film | undefined): string {
    // Check if film is defined before accessing its properties
    if (film) {
      return film.image ?? '';
    }
    return ''; // Return a default value if film is undefined
  }

  addReviewClicked(film: Film | undefined) {
    if (film) {
      this.router.navigate(['/review', film.id]);
    }
  }
}
