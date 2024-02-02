import React from 'react';
import './BoardSlot.css';

function BoardSlot({ onDrop }) {
  return (
    <div className="board-slot" onDrop={onDrop} onDragOver={(e) => e.preventDefault()}>
      {/* Emplacement pour une carte */}
    </div>
  );
}

export default BoardSlot;
