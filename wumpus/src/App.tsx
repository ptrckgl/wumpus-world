import './App.css';
import { useState } from 'react';
import imageWumpus from './assets/wumpus.png';

const EMPTY = 0;
const PIT = 1;
const WUMPUS = 2;
const GOLD = 3;

const Empty = () => {
  return <span>EMPTY</span>;
};

const Pit = () => {
  return (
    <div className='pit'>
      <img className='pit' src={imageWumpus} alt='wumpus' />
    </div>
  );
};

const Wumpus = () => {
  return <span>WUMPUS</span>;
};

const Gold = () => {
  return <span>GOLD</span>;
};

const Square = ({ id, type }: { id: string; type: number }) => {
  return (
    <div className='square' id={id}>
      {type === EMPTY && <Empty />}
      {type === PIT && <Pit />}
      {type === WUMPUS && <Wumpus />}
      {type === GOLD && <Gold />}
    </div>
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
            <Square id={`col-${j}`} type={cell} />
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
