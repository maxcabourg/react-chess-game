import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

export class Pawn extends Piece {
  constructor(isWhite) {
    super(isWhite);
    this.didFirstMove = false;
  }

  getLetter() {
    return "P";
  }
  canMove(board, start, destination) {
    /*
     * lors de son premier déplacement - bouger d'une ou 2 cases en avant s'il n'y a pas d'obstacle
     * Lors des déplacements suivants : - aller 1 case en avant s'il n'y a pas d'obstacle / aller 1 case en diagonale avant gauche ou droite
     * s'il y a une pièce adverse
     */
    if (this.isWhite) {
      return this.canMoveAsWhite(board, start, destination);
    }
    return this.canMoveAsBlack(board, start, destination);
  }

  canMoveAsWhite(board, start, destination) {
    if (destination.x < 0 || destination.x > 7) {
      return false;
    }
    // Check du 1er movement
    if (!this.didFirstMove) {
      if (
        start.x === destination.x &&
        destination.y - start.y === 2 &&
        !board.spots[destination.x][destination.y - 1].piece
      ) {
        return true;
      }
    }
    // Le 1er mouvement a déjà été effectué
    // Check de la diagonale
    if (
      Math.abs(start.x - destination.x) === 1 &&
      destination.y - start.y === 1 &&
      destination.piece
    ) {
      return true;
    }
    // Check 1 case en avant
    if (
      start.x === destination.x &&
      destination.y - start.y === 1 &&
      !destination.piece
    ) {
      return true;
    }
    return false;
  }

  canMoveAsBlack(board, start, destination) {
    // Check du 1er movement
    if (!this.didFirstMove) {
      if (
        start.x === destination.x &&
        destination.y - start.y === -2 &&
        !board.spots[destination.x][destination.y + 1].piece
      ) {
        return true;
      }
    }
    // Le 1er mouvement a déjà été effectué
    // Check de la diagonale
    if (
      Math.abs(start.x - destination.x) === 1 &&
      destination.y - start.y === -1 &&
      destination.piece
    ) {
      return true;
    }
    // Check 1 case en avant
    if (
      start.x === destination.x &&
      destination.y - start.y === -1 &&
      !destination.piece
    ) {
      return true;
    }
    return false;
  }
}
