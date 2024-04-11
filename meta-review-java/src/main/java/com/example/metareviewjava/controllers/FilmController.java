package com.example.metareviewjava.controllers;

import com.example.metareviewjava.entities.Film;
import com.example.metareviewjava.services.FilmService;
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
@RequestMapping("/api/film")
public class FilmController {

    @Autowired
    FilmService filmService;

    //Create new Film
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Film> createFilm(@RequestBody Film film){
        Film newFilm = filmService.createFilm(film);
        return new ResponseEntity<Film>(newFilm, HttpStatus.CREATED);
    }
    //Get film by id
    @GetMapping(path="/{filmId}",produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Film> getFilmById(@PathVariable Integer filmId) {
        Film filmFound = filmService.getFilmById(filmId);
        return new ResponseEntity<Film>(filmFound,HttpStatus.OK);
    }
    //Get all films
    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Film>> getAllFilms() {
        List<Film> filmsList = filmService.getAllFilms();
        return new ResponseEntity<List<Film>>(filmsList,HttpStatus.OK);
    }
    //Update film
    @PutMapping(consumes =MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Film> updateFilm(@RequestBody Film film){
        Film FilmUpdated = filmService.updateFilm(film);
        return new ResponseEntity<Film>(FilmUpdated,HttpStatus.ACCEPTED);
    }
    //Delete film
    @DeleteMapping(path="/{id}")
    public ResponseEntity<Object> deleteFilm(@PathVariable Integer id) {
        filmService.deleteFilm(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
