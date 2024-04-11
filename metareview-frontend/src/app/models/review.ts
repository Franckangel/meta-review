import { Film } from "./film";

export class Review {

  id: number;
  textArea: string;
  film: Film;
  score: number;

  constructor(){
    this.id = 0;
    this.textArea = "";
    this.film = new Film();
    this.score = 0;
  }

}
