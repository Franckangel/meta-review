import { Component, Input } from '@angular/core';
import { Film } from '../models/film';
import { FormsModule } from '@angular/forms';
import { Review } from '../models/review';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../services/review.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-review-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css',
})
export class ReviewDetailsComponent {
  @Input() film: Film | undefined;
  @Input() review: Omit<Review, 'id'> | undefined;
  @Input() filmGotReview: boolean = false;
  user: User | undefined;

  constructor(
    private reviewService: ReviewService,
    private userService: UserService
  ) {
    this.userService.get(1).subscribe((user) => {
      this.user = user;
    });
  }
}
