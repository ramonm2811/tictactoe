import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Cuadro.js";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    <div className="container-fluid boardContainer bg-dark">
      <div className="container">
        <h1>Tic Tac Toe in React.js</h1>

        <div className="info-wrapper w-100">
          <h3 className="mx-auto ">
            {winner ? "Winner: " + winner : "Next Player: " + xO}
          </h3>
        </div>
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;
