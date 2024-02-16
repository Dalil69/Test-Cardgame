import React from 'react';
import './Board.css';
import BoardSlot from '../BoardSlot/BoardSlot';
import { useDrop } from 'react-dnd';

const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
  accept: 'card',
  drop: (item, monitor) => {
    // Logique pour gérer une carte déposée
    console.log("Card dropped", item);
  },
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
    canDrop: !!monitor.canDrop(),
  }),
}));

// Attachez `dropRef` à votre élément de plateau ou d'emplacement :
<div ref={dropRef} className="board-slot">
  {/* Emplacement pour une carte */}
</div>

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


