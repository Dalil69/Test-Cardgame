import React from 'react';
import { useDrop } from 'react-dnd';
import './BoardSlot.css';

function BoardSlot() {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => console.log("Card dropped"),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  // Style conditionnel pour le surlignement
  const getSlotStyle = () => {
    if (isOver && canDrop) {
      return { backgroundColor: 'lightgreen' };
    } else if (!isOver && canDrop) {
      return { backgroundColor: 'lightyellow' };
    } else {
      return {};
    }
  };

  return (
    <div ref={dropRef} className="board-slot" style={getSlotStyle()}>
      {/* Emplacement pour une carte */}
    </div>
  );
}

export default BoardSlot;
