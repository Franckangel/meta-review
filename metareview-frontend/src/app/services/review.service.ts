import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

const APIUrlReview = 'http://localhost:8080/api/review';
@Injectable({
  providedIn: 'root',
})
export class ReviewService extends DataService {
  constructor(http: HttpClient) {
    super(APIUrlReview, http);
  }
}
