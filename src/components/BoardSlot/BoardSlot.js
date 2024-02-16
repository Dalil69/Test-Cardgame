import React from 'react';
import { useDrop } from 'react-dnd';
import './BoardSlot.css';

function BoardSlot({ onDrop }) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "card", // Assurez-vous que cela correspond au type défini dans useDrag du composant Card
    drop: (item, monitor) => {
      if (onDrop) onDrop(item); // Appelle onDrop passé en prop avec l'item déposé
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  // Style conditionnel basé sur isOver et canDrop
  let backgroundColor = '#f0f0f0'; // Couleur par défaut
  if (isOver && canDrop) backgroundColor = 'darkgreen';
  else if (!isOver && canDrop) backgroundColor = 'darkkhaki';

  return (
    <div ref={dropRef} className="board-slot" style={{ backgroundColor }}>
      {/* Contenu de l'emplacement */}
    </div>
  );
}

export default BoardSlot;
