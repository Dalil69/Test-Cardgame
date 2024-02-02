import React from 'react';
import './Board.css';
import BoardSlot from '../BoardSlot/BoardSlot';

function Board({ slots, onCardDrop }) {
  return (
    <div className="board">
      {slots.map((slot, index) => (
        <BoardSlot key={index} onDrop={onCardDrop} />
      ))}
    </div>
  );
}

export default Board;


