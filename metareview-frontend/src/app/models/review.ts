import { Film } from './film';
import { User } from './user';

export class Review {
  id: number;
  textArea: string;
  score: number;
  film: Film;
  user: User;

  constructor() {
    this.id = 0;
    this.textArea = '';
    this.film = new Film();
    this.score = 0;
    this.user = new User();
  }
}
