import './App.css';
import { useState } from 'react';

const EMPTY = 0;
const PIT = 1;
const WUMPUS = 2;
const GOLD = 3;

const Square = ({ id, type }: { id: string; type: number }) => {
  return (
    <span className='cell' id={id}>
      {type}
    </span>
  );
};

/**
 * Returns the whole board nested inside of a div
 */
const Board = ({ size }: { size: number }) => {
  const [board, setBoard] = useState(generateBoard({ size }));
  return (
    <div>
      {board.map((row: number[], i) => (
        <div id={`row-${i}`} className='row'>
          {row.map((cell, j) => (
            <Square id={`col-${j}`} type={board[i][j]} />
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * Randomly generates the Wumpus World board!
 */
const generateBoard = ({ size }: { size: number }) => {
  // Using Array.fill() BREAKS THINGS!!!
  let board: number[][] = new Array([]);
  for (let i = 0; i < size; i++) {
    board[i] = new Array(size);
    for (let j = 0; j < size; j++) board[i][j] = EMPTY;
  }
  board[1][1] = PIT;
  return board;
};

export default function Game() {
  return (
    <div>
      <Board size={4} />
    </div>
  );
}
