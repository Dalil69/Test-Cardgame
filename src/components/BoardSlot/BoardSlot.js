import React from 'react';
import { useDrop } from 'react-dnd';
import './BoardSlot.css';

function BoardSlot() {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item, monitor) => {
      // Logique pour gérer une carte déposée
      console.log("Card dropped", item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className="board-slot"
      style={{ backgroundColor: isOver ? 'darkgreen' : 'green' }}
    >
      {/* Emplacement pour une carte */}
    </div>
  );
}

export default BoardSlot;
