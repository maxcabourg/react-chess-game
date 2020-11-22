import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

export class King extends Piece {
  getLetter() {
    return "K";
  }
  canMove(board, start, destination) {
    // Le roi peut aller sur toutes les cases adjacentes à la sienne (sauf si une pièce alliée est déjà dessus)
    if (
      destination.x < 0 ||
      destination.x > 8 ||
      destination.y < 0 ||
      destination.y > 8
    ) {
      return false;
    }
    if (
      Math.abs(destination.x - start.x) > 1 ||
      Math.abs(destination.y - start.y) > 1
    ) {
      return false;
    }
    return true;
  }
}
