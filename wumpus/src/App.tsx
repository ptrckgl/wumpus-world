import './App.css';
import { useState } from 'react';

const EMPTY = 0;
const PIT = 1;
const WUMPUS = 2;
const GOLD = 3;

const Square = ({ id }: { id: string }) => {
  return (
    <span className='cell' id={id}>
      x
    </span>
  );
};

const Board = ({ size }: { size: number }) => {
  const [board, setBoard] = useState(Array(size).fill(Array(size).fill(EMPTY)));

  return (
    <div>
      {board.map((row: number[], i) => (
        <div id={`row-${i}`} className='row'>
          {row.map((cell, j) => (
            <Square id={`col-${j}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Game() {
  return (
    <div>
      <Board size={4} />
    </div>
  );
}
