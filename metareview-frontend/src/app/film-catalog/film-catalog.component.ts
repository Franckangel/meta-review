import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { FilmDetailsComponent } from "../film-details/film-details.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-film-catalog',
    standalone: true,
    templateUrl: './film-catalog.component.html',
    styleUrl: './film-catalog.component.css',
    imports: [FilmDetailsComponent, CommonModule]
})
export class FilmCatalogComponent {
  films: any;
  filter: string = "";

  constructor(private filmService : FilmService){
      this.films = [
        {
          "id": 1,
          "name": "The Shawshank Redemption",
          "synopsis": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "director": "Frank Darabont",
          "genre": "Drama",
          "date": "1994",
          "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
      {
          "id": 2,
          "name": "The Godfather",
          "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
          "director": "Francis Ford Coppola",
          "genre": "Crime, Drama",
          "date": "1972",
          "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
          "id": 3,
          "name": "The Dark Knight",
          "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          "director": "Christopher Nolan",
          "genre": "Action, Crime, Drama",
          "date": "2008",
          "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
      },
      {
          "id": 4,
          "name": "The Godfather: Part II",
          "synopsis": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
          "director": "Francis Ford Coppola",
          "genre": "Crime, Drama",
          "date": "1974",
          "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
          "id": 5,
          "name": "12 Angry Men",
          "synopsis": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
          "director": "Sidney Lumet",
          "genre": "Crime, Drama",
          "date": "1957",
          "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
      },
      {
          "id": 6,
          "name": "Schindler's List",
          "synopsis": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          "director": "Steven Spielberg",
          "genre": "Biography, Drama, History",
          "date": "1993",
          "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
          "id": 7,
          "name": "The Lord of the Rings: The Return of the King",
          "synopsis": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          "director": "Peter Jackson",
          "genre": "Action, Adventure, Drama",
          "date": "2003",
          "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
          "id": 8,
          "name": "Pulp Fiction",
          "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          "director": "Quentin Tarantino",
          "genre": "Crime, Drama",
          "date": "1994",
          "image": "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
      },
      {
          "id": 9,
          "name": "The Lord of the Rings: The Fellowship of the Ring",
          "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          "director": "Peter Jackson",
          "genre": "Action, Adventure, Drama",
          "date": "2001",
          "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
      },
      {
          "id": 10,
          "name": "The Good, the Bad and the Ugly",
          "synopsis": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
          "director": "Sergio Leone",
          "genre": "Adventure, Western",
          "date": "1966",
          "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
      }
      ,
  {
      "id": 11,
      "name": "Forrest Gump",
      "synopsis": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      "director": "Robert Zemeckis",
      "genre": "Drama, Romance",
      "date": "1994",
      "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
        "id": 12,
        "name": "Fight Club",
        "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "director": "David Fincher",
        "genre": "Drama",
        "date": "15 Oct 1999",
        "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  }

      ];
  }

  getFilteredFilm() {
    return this.filter === '' ? this.films : this.films.filter((film: any) => {
      const genresArray = film.genre.split(',').map((genre: string) => genre.trim());
      return genresArray.includes(this.filter);
    });
  }




}
