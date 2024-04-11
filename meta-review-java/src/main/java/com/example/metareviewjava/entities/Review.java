package com.example.metareviewjava.entities;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Review implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id ;
    public String textArea;
    @OneToOne
    public Film film;
    public int score;

    public Review(){

    }

    public Review(int id, String textArea, int score, Film film){
        this.id = id;
        this.textArea = textArea;
        this.score = score;
        this.film = film;
                
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTextArea() {
        return textArea;
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
