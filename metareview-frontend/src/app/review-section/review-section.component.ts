import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Film } from '../models/film';
import { Review } from '../models/review';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';
import { FormsModule } from '@angular/forms';
import { ReviewDetailsComponent } from '../review-details/review-details.component';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ReviewService } from '../services/review.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-section',
  standalone: true,
  templateUrl: './review-section.component.html',
  styleUrl: './review-section.component.css',
  imports: [FormsModule, ReviewDetailsComponent, CommonModule],
})
export class ReviewSectionComponent {
  filmId: number | null = null;
  parentFilm: Film | undefined;
  score: number = 0; // Initial score
  progressWidth: number = 0; // Initial progress width
  textArea: string = '';
  reviewList: Omit<Review, 'id'>[] = [];
  addReview!: Omit<Review, 'id'>;
  user: User | undefined;
  filmGotReview: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private userService: UserService,
    private reviewService: ReviewService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Extract film ID from route parameter
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.filmId = parseInt(idParam, 10); // Convert string to number
      } else {
        this.filmId = null;
      }
      if (this.filmId) {
        // Fetch film details using film ID
        //this.filmService.getFilmById(this.filmId).subscribe(film => {  #Test methods
        this.filmService.get(this.filmId).subscribe((film) => {
          this.parentFilm = film;
          this.checkIfFilmHasReviews();
        });
      }
    });

    this.userService.get(1).subscribe((user) => {
      this.user = user;
    });

    this.reviewService.getAll().subscribe((reviews: Omit<Review, 'id'>[]) => {
      this.reviewList = reviews;
    });
  }
  checkIfFilmHasReviews() {
    if (this.parentFilm) {
      this.reviewService.getAll().subscribe((reviews: Review[]) => {
        if (
          reviews.some(
            (review: Review) => review.film.id === this.parentFilm?.id
          )
        ) {
          this.filmGotReview = true;
        } else {
          this.filmGotReview = false;
        }
      });
      this.cdr.detectChanges();
    }
  }
  getFilteredReview(): Omit<Review, 'id'>[] {
    return this.filmGotReview
      ? this.reviewList.filter(
          (review) => review.film.id === this.parentFilm?.id
        )
      : [];
  }

  createReview() {
    if (this.parentFilm && this.user) {
      this.addReview = {
        textArea: this.textArea,
        score: this.score,
        film: this.parentFilm,
        user: this.user,
      };
    }
    this.reviewService.Create(this.addReview).subscribe(() => {
      alert('Review Added Successfully');
      this.reviewList.push(this.addReview);
      this.checkIfFilmHasReviews();
      //window.location.reload();
    });
  }

  getFilmUrl(film: Film | undefined): string {
    // Check if film is defined before accessing its properties
    if (film) {
      return film.image ?? '';
    }
    return ''; // Return a default value if film is undefined
  }

  updateProgressBar() {
    // Calculate the progress width based on the score
    switch (this.score) {
      case 1:
      case 2:
        this.progressWidth = 10;
        break;
      case 3:
      case 4:
        this.progressWidth = 25;
        break;
      case 5:
      case 6:
        this.progressWidth = 50;
        break;
      case 7:
      case 8:
      case 9:
        this.progressWidth = 75;
        break;
      case 10:
        this.progressWidth = 100;
        break;
      default:
        this.progressWidth = 0;
    }
  }
}
