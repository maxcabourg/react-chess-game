import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

const directions = {
  TOP_RIGHT: "topRight",
  TOP_LEFT: "topLeft",
  BOTTOM_RIGHT: "bottomRight",
  BOTTOM_LEFT: "bottomLeft",
};
export class Bishop extends Piece {
  getLetter() {
    return "B";
  }
  canMove(board, start, destination) {
    // Le fou peut seulement bouger en diagonale
    if (
      destination.x < 0 ||
      destination.x > 8 ||
      destination.y < 0 ||
      destination.y > 8
    ) {
      return false;
    }
    if (
      Math.abs(destination.y - start.y) !== Math.abs(destination.x - start.x)
    ) {
      return false;
    }
    // Il ne doit pas y avoir de pièce entre le départ et la destination
    const direction = this.getMoveDirection(start, destination);
    let { x } = start;
    let { y } = start;
    switch (direction) {
      case directions.TOP_RIGHT:
        x++;
        y++;
        while (x < destination.x && y < destination.y) {
          if (board.spots[x][y].piece) {
            return false;
          }
          x++;
          y++;
        }
        return true;
        break;
      case directions.TOP_LEFT:
        x--;
        y++;
        while (x > destination.x && y < destination.y) {
          if (board.spots[x][y].piece) {
            return false;
          }
          x--;
          y++;
        }
        return true;
        break;
      case directions.BOTTOM_RIGHT:
        x++;
        y--;
        while (x < destination.x && y > destination.y) {
          if (board.spots[x][y].piece) {
            return false;
          }
          x++;
          y--;
        }
        return true;
        break;
      case directions.BOTTOM_LEFT:
        x--;
        y--;
        while (x > destination.x && y > destination.y) {
          if (board.spots[x][y].piece) {
            return false;
          }
          x--;
          y--;
        }
        return true;
    }
  }

  getMoveDirection(start, destination) {
    if (destination.x - start.x > 0 && destination.y - start.y > 0) {
      return directions.TOP_RIGHT;
    }
    if (destination.x - start.x < 0 && destination.y - start.y > 0) {
      return directions.TOP_LEFT;
    }
    if (destination.x - start.x > 0 && destination.y - start.y < 0) {
      return directions.BOTTOM_RIGHT;
    }
    if (destination.x - start.x < 0 && destination.y - start.y < 0) {
      return directions.BOTTOM_LEFT;
    }
  }
}
