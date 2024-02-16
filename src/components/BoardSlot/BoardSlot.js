import React from 'react';
import { useDrop } from 'react-dnd';
import './BoardSlot.css';

function BoardSlot({ onDrop }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: (item) => onDrop(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={dropRef} className="board-slot" style={{ backgroundColor: isOver ? 'darkgreen' : 'transparent' }}>
      {/* Emplacement pour une carte */}
    </div>
  );
}

export default BoardSlot;
