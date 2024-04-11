import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})
export class FilmDetailsComponent {
  @Input() film !: Film
  @Output() addReview = new EventEmitter();



  getFilmUrl(film: Film){
    return film?.image ?? '';
  }

  addReviewClicked(film: Film){
    this.addReview.emit();
  }
}
