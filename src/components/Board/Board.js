import React from 'react';
import './Board.css';
import BoardSlot from '../BoardSlot/BoardSlot';
import { useDrop } from 'react-dnd';

function Board({ slots, onCardDrop }) {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: 'card',
    drop: (item, monitor) => {
      // Logique pour gérer une carte déposée
      console.log("Card dropped", item);
      if (onCardDrop) onCardDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div ref={dropRef} className="board">
      {slots.map((slot, index) => (
        <BoardSlot key={index} onDrop={onCardDrop} />
      ))}
    </div>
  );
}

export default Board;
