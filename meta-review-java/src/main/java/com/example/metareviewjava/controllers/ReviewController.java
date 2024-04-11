package com.example.metareviewjava.controllers;

import com.example.metareviewjava.entities.Review;
import com.example.metareviewjava.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    //Create new Review
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Review> createReview(@RequestBody Review review){
        Review newReview = reviewService.createReview(review);
        return new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }
    //Get review by id
    @GetMapping(path="/{reviewId}",produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Review> getReviewById(@PathVariable Integer reviewId) {
        Review reviewFound = reviewService.getReviewById(reviewId);
        return new ResponseEntity<Review>(reviewFound,HttpStatus.OK);
    }
    //Get all reviews
    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviewsList = reviewService.getAllReviews();
        return new ResponseEntity<List<Review>>(reviewsList,HttpStatus.OK);
    }
    //Update review
    @PutMapping(consumes =MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Review> updateReview(@RequestBody Review review){
        Review ReviewUpdated = reviewService.updateReview(review);
        return new ResponseEntity<Review>(ReviewUpdated,HttpStatus.ACCEPTED);
    }
    //Delete review
    @DeleteMapping(path="/{id}")
    public ResponseEntity<Object> deleteReview(@PathVariable Integer id) {
        reviewService.deleteReview(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
