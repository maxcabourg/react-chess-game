import React from "react";

export default function FallenSoldiers({ pieces }) {
  return (
    <div>
      <span>{pieces.map((piece) => piece.getLetter())}</span>
    </div>
  );
}
