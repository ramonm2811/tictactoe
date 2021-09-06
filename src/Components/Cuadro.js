import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="board bg-secondary text-white m-5 rounded p-3 mx-auto">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
