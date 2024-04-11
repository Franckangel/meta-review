import { Review } from "./review";

export class User {

  id: number;
  name: string;
  pseudo: string;
  isAdmin: boolean;
  review: Review[];

  constructor(){
    this.id = 0;
    this.name = "";
    this.pseudo = "";
    this.isAdmin = false;
    this.review = [];
  }
}
