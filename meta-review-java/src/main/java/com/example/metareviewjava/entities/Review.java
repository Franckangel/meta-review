package com.example.metareviewjava.entities;


import jakarta.persistence.*;
import org.springframework.data.annotation.Reference;

import java.io.Serializable;

@Entity
public class Review implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id ;
    private String textArea;
    private int score;

    @ManyToOne
    @JoinColumn(name = "film_id")
    private Film film;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Review(){

    }

    public Review(String textArea, int score){
        this.textArea = textArea;
        this.score = score;
    }
    public Review(String textArea, int score, Film film, User user){
        this.textArea = textArea;
        this.score = score;
        this.film = film;
        this.user = user;
    }


    public int getId() {
        return id;
    }

    public String getTextArea() {
        return textArea;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setTextArea(String textArea) {
        this.textArea = textArea;
    }

    public Film getFilm() {
        return film;
    }

    public void setFilm(Film film) {
        this.film = film;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
