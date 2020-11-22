import React, { FunctionComponent, FC, ReactElement } from "react";
import { Spot } from "../business/Spot";
import { PieceComponent } from "./Piece.component";
import { ItemTypes } from "./Constants";
import { useDrop } from "react-dnd";

export const SpotComponent = ({ spot, onMove, isPieceDraggable }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PIECE,
    drop: (item) => {
      if (onMove) {
        onMove(item.spot, spot);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const { piece } = spot;
  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {piece && (
        <PieceComponent
          piece={piece}
          spot={spot}
          draggable={isPieceDraggable}
        />
      )}
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: "yellow",
          }}
        />
      )}
    </div>
  );
};
