import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

const towerDirections = {
  RIGHT: "right",
  LEFT: "left",
  DOWN: "down",
  UP: "up",
};
export class Tower extends Piece {
  getLetter() {
    return "T";
  }
  canMove(board, start, destination) {
    // La tour peut seulement bouger sur sa ligne ou sa colonne
    if (start.x !== destination.x && start.y !== destination.y) {
      return false;
    }
    if (
      destination.x < 0 ||
      destination.x > 8 ||
      destination.y < 0 ||
      destination.y > 8
    ) {
      return false;
    }
    const direction = this.getDirection(start, destination);
    switch (direction) {
      case towerDirections.RIGHT:
        for (let i = start.x + 1; i <= destination.x - 1; i++) {
          if (board.spots[i][start.y].piece) {
            return false;
          }
        }
        return true;
        break;
      case towerDirections.LEFT:
        for (let i = start.x - 1; i >= destination.x + 1; i--) {
          if (board.spots[i][start.y].piece) {
            return false;
          }
        }
        return true;
      case towerDirections.UP:
        for (let i = start.y + 1; i <= destination.y - 1; i++) {
          if (board.spots[start.x][i].piece) {
            return false;
          }
        }
        return true;
      case towerDirections.DOWN:
        for (let i = start.y - 1; i >= destination.y + 1; i--) {
          if (board.spots[start.x][i].piece) {
            return false;
          }
        }
        return true;
    }
    return false;
  }

  // Précondition : la direction sera toujours valide
  getDirection(start, destination) {
    if (destination.x - start.x > 0) {
      return towerDirections.RIGHT;
    } else if (destination.x - start.x < 0) {
      return towerDirections.LEFT;
    } else if (destination.y - start.y > 0) {
      return towerDirections.UP;
    }
    return towerDirections.DOWN;
  }
}
