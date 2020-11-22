import React, { FunctionComponent } from "react";
import { Board } from "../business/Board";
import { Spot } from "../business/Spot";
import { SpotComponent } from "./Spot.component";

export const BoardComponent = ({
  board,
  isWhiteTurn,
  isGameOver,
  onTryMove,
}) => {
  const onDropPiece = (origin, destination) => {
    onTryMove(origin, destination);
  };

  const isPieceDraggable = (spot) => {
    return (
      !isGameOver &&
      ((spot.piece && spot.piece.isWhite && isWhiteTurn) ||
        (spot.piece && !spot.piece.isWhite && !isWhiteTurn))
    );
  };
  return (
    <div className="board">
      {board.spots.map((spots) =>
        spots.map((spot) => (
          <div
            key={`${spot.x}${spot.y}`}
            style={{
              backgroundColor: spot.isWhite ? "white" : "black",
              gridRow: 7 - spot.y + 1,
              gridColumn: spot.x + 1,
              fontSize: "28px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SpotComponent
              spot={spot}
              onMove={onDropPiece}
              isPieceDraggable={isPieceDraggable(spot)}
            />
          </div>
        ))
      )}
    </div>
  );
};
