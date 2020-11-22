import { Board } from "./Board";
import { King } from "./King";
import { Pawn } from "./Pawn";
import { Player } from "./Player";

export class Game {
  constructor(board) {
    this.fallenWhitePieces = [];
    this.fallenBlackPieces = [];
    this.whitePlayer = new Player(true);
    this.blackPlayer = new Player(false);
    this.playingPlayer = this.whitePlayer;
    this.board = board;
    this.winner = null;
  }

  get status() {
    if (this.winner) {
      return this.winner.isWhite ? "Whites won !" : "Blacks won !";
    }
    return this.playingPlayer.isWhite
      ? "Whites are playing"
      : "Blacks are playing";
  }

  tryMakeMove(origin, destination) {
    if (this.playingPlayer.isWhite) {
      if (
        origin.piece &&
        origin.piece.isWhite &&
        destination.piece &&
        destination.piece.isWhite
      ) {
        throw new Error(
          "Impossible de déplacer un pion blanc sur un autre pion blanc"
        );
      }
    }
    if (!this.playingPlayer.isWhite) {
      if (
        origin.piece &&
        !origin.piece.isWhite &&
        destination.piece &&
        !destination.piece.isWhite
      ) {
        throw new Error(
          "Impossible de déplacer un pion noir sur un autre pion noir"
        );
      }
    }
    if (origin.piece.canMove(this.board, origin, destination)) {
      if (destination.piece) {
        if (destination.piece.isWhite) {
          this.fallenWhitePieces.push(destination.piece);
        } else {
          this.fallenBlackPieces.push(destination.piece);
        }
      }

      if (destination.piece instanceof King) {
        this.winner = this.playingPlayer;
      }
      this.board.spots[destination.x][destination.y].piece = this.board.spots[
        origin.x
      ][origin.y].piece;
      this.board.spots[origin.x][origin.y].piece = null;
      if (
        this.board.spots[destination.x][destination.y].piece instanceof Pawn
      ) {
        this.board.spots[destination.x][
          destination.y
        ].piece.didFirstMove = true;
      }

      if (!this.winner) {
        this.switchPlayers();
      }
    }
  }

  copy() {
    const copy = new Game(this.board);
    copy.playingPlayer = this.playingPlayer;
    copy.whitePlayer = this.whitePlayer;
    copy.whitePlayer = this.whitePlayer;
    copy.fallenBlackPieces = this.fallenBlackPieces;
    copy.fallenWhitePieces = this.fallenWhitePieces;
    copy.winner = this.winner;
    return copy;
  }

  switchPlayers() {
    this.playingPlayer =
      this.playingPlayer === this.whitePlayer
        ? this.blackPlayer
        : this.whitePlayer;
  }
}
