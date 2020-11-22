import { Piece } from "./Piece";

export class Spot {
  constructor(x, y, piece, isWhite) {
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.isWhite = isWhite;
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      throw new Error(`Coordinates are invalids [${x}, ${y}]`);
    }
  }
}
