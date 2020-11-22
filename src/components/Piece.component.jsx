import React, { FunctionComponent } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

export const PieceComponent = ({ piece, spot, draggable }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.PIECE, piece, spot },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: draggable,
  });
  return (
    <span
      style={{
        cursor: "pointer",
        color: piece.isWhite ? "red" : "green",
      }}
      ref={drag}
    >
      {piece.getLetter()}
    </span>
  );
};
