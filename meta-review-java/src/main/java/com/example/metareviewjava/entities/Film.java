package com.example.metareviewjava.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Film implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String synopsis;
    private String director;
    private String genre;
    private String release_date;
    private String image;
    @OneToMany
    private List<Review> review;

    public Film(){

    }

    public Film(String name, String synopsis, String director, String genre, String release_date, String image){
        this.name = name;
        this.synopsis =synopsis;
        this.director = director;
        this.genre = genre;
        this.release_date = release_date;
        this.image = image;
        this.review = new ArrayList<Review>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDate() {
        return release_date;
    }

    public void setDate(String release_date) {
        this.release_date = release_date;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
