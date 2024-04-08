package com.example.metareviewjava.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.io.Serializable;

@Entity
public class Review implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id ;
    public String textArea;

    public int score;

    public Review(){

    }

    public Review(int id, String textArea, int score){
        this.id = id;
        this.textArea = textArea;
        this.score = score;
                
    }
}
