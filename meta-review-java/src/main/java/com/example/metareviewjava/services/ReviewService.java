package com.example.metareviewjava.services;

import com.example.metareviewjava.entities.Review;
import com.example.metareviewjava.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
    // function return a review by id or null in case it doesn't exist
    public Review getReviewById(Integer id) {
        return reviewRepository.findById(id).orElse(null);
    }
    // function that retrieve all reviews from database
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
    // function that update an existing review in database
    public Review updateReview(Review review) {
        return reviewRepository.save(review);
    }
    // function that remove a review from database by it's id
    public void deleteReview(Integer id) {
        reviewRepository.deleteById(id);
    }
}
