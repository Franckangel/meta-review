package com.example.metareviewjava.services;

import com.example.metareviewjava.entities.Film;
import com.example.metareviewjava.repositories.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmService {

    @Autowired
    private FilmRepository filmRepository;

    public Film createFilm(Film film) {
        return filmRepository.save(film);
    }
    // function return a film by id or null in case it doesn't exist
    public Film getFilmById(Integer id) {
        return filmRepository.findById(id).orElse(null);
    }
    // function that retrieve all films from database
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }
    // function that update an existing film in database
    public Film updateFilm(Film film) {
        return filmRepository.save(film);
    }
    // function that remove a film from database by it's id
    public void deleteFilm(Integer id) {
        filmRepository.deleteById(id);
    }

}
