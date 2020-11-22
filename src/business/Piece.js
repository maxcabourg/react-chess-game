import { Board } from "./Board";
import { Spot } from "./Spot";

export class Piece {
  constructor(isWhite) {
    this.isWhite = isWhite;
  }
  canMove(board, start, destination) {}
  getLetter() {}
}
