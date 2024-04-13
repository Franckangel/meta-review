import { Component, Input } from '@angular/core';
import { Film } from '../models/film';
import { Review } from '../models/review';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-review-section',
  standalone: true,
  imports: [],
  templateUrl: './review-section.component.html',
  styleUrl: './review-section.component.css'
})
export class ReviewSectionComponent {

  filmId: number | null = null;
  film: Film | undefined;

  constructor(private route: ActivatedRoute, private filmService: FilmService) {}

  ngOnInit(): void {
    // Extract film ID from route parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.filmId = parseInt(idParam, 10); // Convert string to number
      } else {
        this.filmId = null;
      }
      if (this.filmId) {
        // Fetch film details using film ID
        this.filmService.getFilmById(this.filmId).subscribe(film => {
          this.film = film;
        });
      }
    });
  }
}


