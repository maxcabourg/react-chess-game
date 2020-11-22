import { Bishop } from "./Bishop";
import { King } from "./King";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rider } from "./Rider";
import { Spot } from "./Spot";
import { Tower } from "./Tower";

export class Board {
  spots = [];
  constructor() {
    this.resetBoard();
  }

  resetBoard() {
    for (let i = 0; i < 8; i++) {
      this.spots[i] = [];
    }
    // First white pieces row
    this.spots[0][0] = new Spot(0, 0, new Tower(true), false);
    this.spots[1][0] = new Spot(1, 0, new Rider(true), true);
    this.spots[2][0] = new Spot(2, 0, new Bishop(true), false);
    this.spots[3][0] = new Spot(3, 0, new Queen(true), true);
    this.spots[4][0] = new Spot(4, 0, new King(true), false);
    this.spots[5][0] = new Spot(5, 0, new Bishop(true), true);
    this.spots[6][0] = new Spot(6, 0, new Rider(true), false);
    this.spots[7][0] = new Spot(7, 0, new Tower(true), true);

    // White pawns row
    this.spots[0][1] = new Spot(0, 1, new Pawn(true), true);
    this.spots[1][1] = new Spot(1, 1, new Pawn(true), false);
    this.spots[2][1] = new Spot(2, 1, new Pawn(true), true);
    this.spots[3][1] = new Spot(3, 1, new Pawn(true), false);
    this.spots[4][1] = new Spot(4, 1, new Pawn(true), true);
    this.spots[5][1] = new Spot(5, 1, new Pawn(true), false);
    this.spots[6][1] = new Spot(6, 1, new Pawn(true), true);
    this.spots[7][1] = new Spot(7, 1, new Pawn(true), false);

    this.spots[0][2] = new Spot(0, 2, null, false);
    this.spots[1][2] = new Spot(1, 2, null, true);
    this.spots[2][2] = new Spot(2, 2, null, false);
    this.spots[3][2] = new Spot(3, 2, null, true);
    this.spots[4][2] = new Spot(4, 2, null, false);
    this.spots[5][2] = new Spot(5, 2, null, true);
    this.spots[6][2] = new Spot(6, 2, null, false);
    this.spots[7][2] = new Spot(7, 2, null, true);

    this.spots[0][3] = new Spot(0, 3, null, true);
    this.spots[1][3] = new Spot(1, 3, null, false);
    this.spots[2][3] = new Spot(2, 3, null, true);
    this.spots[3][3] = new Spot(3, 3, null, false);
    this.spots[4][3] = new Spot(4, 3, null, true);
    this.spots[5][3] = new Spot(5, 3, null, false);
    this.spots[6][3] = new Spot(6, 3, null, true);
    this.spots[7][3] = new Spot(7, 3, null, false);

    this.spots[0][4] = new Spot(0, 4, null, false);
    this.spots[1][4] = new Spot(1, 4, null, true);
    this.spots[2][4] = new Spot(2, 4, null, false);
    this.spots[3][4] = new Spot(3, 4, null, true);
    this.spots[4][4] = new Spot(4, 4, null, false);
    this.spots[5][4] = new Spot(5, 4, null, true);
    this.spots[6][4] = new Spot(6, 4, null, false);
    this.spots[7][4] = new Spot(7, 4, null, true);

    this.spots[0][5] = new Spot(0, 5, null, true);
    this.spots[1][5] = new Spot(1, 5, null, false);
    this.spots[2][5] = new Spot(2, 5, null, true);
    this.spots[3][5] = new Spot(3, 5, null, false);
    this.spots[4][5] = new Spot(4, 5, null, true);
    this.spots[5][5] = new Spot(5, 5, null, false);
    this.spots[6][5] = new Spot(6, 5, null, true);
    this.spots[7][5] = new Spot(7, 5, null, false);

    // Black pawns row
    this.spots[0][6] = new Spot(0, 6, new Pawn(false), false);
    this.spots[1][6] = new Spot(1, 6, new Pawn(false), true);
    this.spots[2][6] = new Spot(2, 6, new Pawn(false), false);
    this.spots[3][6] = new Spot(3, 6, new Pawn(false), true);
    this.spots[4][6] = new Spot(4, 6, new Pawn(false), false);
    this.spots[5][6] = new Spot(5, 6, new Pawn(false), true);
    this.spots[6][6] = new Spot(6, 6, new Pawn(false), false);
    this.spots[7][6] = new Spot(7, 6, new Pawn(false), true);

    // Back black pieces row
    this.spots[0][7] = new Spot(0, 7, new Tower(false), true);
    this.spots[1][7] = new Spot(1, 7, new Rider(false), false);
    this.spots[2][7] = new Spot(2, 7, new Bishop(false), true);
    this.spots[3][7] = new Spot(3, 7, new Queen(false), false);
    this.spots[4][7] = new Spot(4, 7, new King(false), true);
    this.spots[5][7] = new Spot(5, 7, new Bishop(false), false);
    this.spots[6][7] = new Spot(6, 7, new Rider(false), true);
    this.spots[7][7] = new Spot(7, 7, new Tower(false), false);
  }
}
