import { Board } from "./Board";
import { Piece } from "./Piece";
import { Spot } from "./Spot";

const directions = {
  LEFT: "left",
  RIGHT: "right",
  UP: "top",
  DOWN: "bottom",
  LEFT_BOTTOM: "left_bottom",
  LEFT_TOP: "left_top",
  RIGHT_BOTTOM: "right_bottom",
  RIGHT_TOP: "right_top",
};

export class Queen extends Piece {
  getLetter() {
    return "Q";
  }
  canMove(board, start, destination) {
    // La reine peut se déplacer à l'horizontale, à la verticale et en diagonale
    if (
      destination.x < 0 ||
      destination.x > 8 ||
      destination.y < 0 ||
      destination.y > 8
    ) {
      return false;
    }
    const direction = this.getDirectionType(start, destination);
    let { x } = start;
    let { y } = start;
    switch (direction) {
      case directions.RIGHT:
        for (let i = start.x + 1; i <= destination.x - 1; i++) {
          if (board.spots[i][start.y].piece) {
            return false;
          }
        }
        return true;
        break;
      case directions.LEFT:
        for (let i = start.x - 1; i >= destination.x + 1; i--) {
          if (board.spots[i][start.y].piece) {
            return false;
          }
        }
        return true;
      case directions.UP:
        for (let i = start.y + 1; i <= destination.y - 1; i++) {
          if (board.spots[start.x][i].piece) {
            return false;
          }
        }
        return true;
      case directions.DOWN:
        for (let i = start.y - 1; i >= destination.y + 1; i--) {
          if (board.spots[start.x][i].piece) {
            return false;
          }
        }
        return true;
      case directions.RIGHT_TOP:
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
      case directions.LEFT_TOP:
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
      case directions.RIGHT_BOTTOM:
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
      case directions.LEFT_BOTTOM:
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

  getDirectionType(start, destination) {
    // Direction verticale
    if (destination.x - start.x === 0) {
      if (destination.y - start.y > 0) {
        return directions.UP;
      }
      return directions.DOWN;
      // Direction horizontale
    } else if (destination.y - start.y === 0) {
      if (destination.x - start.x > 0) {
        return directions.RIGHT;
      }
      return directions.LEFT;
    }
    // Diagonale
    if (destination.x - start.x > 0 && destination.y - start.y > 0) {
      return directions.RIGHT_TOP;
    }
    if (destination.x - start.x < 0 && destination.y - start.y > 0) {
      return directions.LEFT_TOP;
    }
    if (destination.x - start.x > 0 && destination.y - start.y < 0) {
      return directions.RIGHT_BOTTOM;
    }
    if (destination.x - start.x < 0 && destination.y - start.y < 0) {
      return directions.LEFT_BOTTOM;
    }
  }
}
