import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

export class Rider extends Piece {
  getLetter() {
    return "R";
  }
  canMove(board, start, destination) {
    // Le cavalier peut bouger de + / - 2x et + / - 1y OU + / - 1x et +/- 2y
    if (
      destination.x < 0 ||
      destination.x > 8 ||
      destination.y < 0 ||
      destination.y > 8
    ) {
      return false;
    }
    if (
      (Math.abs(destination.x - start.x) === 2 &&
        Math.abs(destination.y - start.y) === 1) ||
      (Math.abs(destination.x - start.x) === 1 &&
        Math.abs(destination.y - start.y) === 2)
    ) {
      return true;
    }
    return false;
  }
}
