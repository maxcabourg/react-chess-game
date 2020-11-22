import logo from "./logo.svg";
import "./App.css";
import { Game } from "./business/Game";
import { DndProvider } from "react-dnd";
import { Board } from "./business/Board";
import { BoardComponent } from "./components/Board.component";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FallenSoldiers from "./components/FallenSoldiers.component";

function App() {
  const [game, setGame] = useState(new Game(new Board()));

  const restartGame = (e) => {
    e.preventDefault();
    setGame(new Game(new Board()));
  };

  const onTryMove = (origin, destination) => {
    try {
      game.tryMakeMove(origin, destination);
      setGame(game.copy());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="d-flex justify-content-center align-items-center App">
      <div className="game-wrapper mr-5">
        <h2>{game.status}</h2>
        <DndProvider backend={HTML5Backend}>
          <div className="mb-2">
            <BoardComponent
              board={game.board}
              onTryMove={onTryMove}
              isGameOver={!!game.winner}
              isWhiteTurn={game.playingPlayer === game.whitePlayer}
            />
          </div>
        </DndProvider>
        <Button variant="primary" onClick={restartGame}>
          Start a new game
        </Button>
      </div>
      <div className="fallen-soldiers">
        <h4>White soldiers fallen :</h4>
        <FallenSoldiers pieces={game.fallenWhitePieces} />

        <h4>Black soldiers fallen :</h4>
        <FallenSoldiers pieces={game.fallenBlackPieces} />
      </div>
    </div>
  );
}

export default App;
