import React from 'react';
import Card from '../Card/Card';
import './Hand.css';

function Hand({ cards }) {
  const onDragStart = (cardId) => {
    console.log("Dragging card with ID:", cardId);
    // Ajoutez ici la logique pour gérer le début du glissement d'une carte
  };

  return (
    <div className="hand">
      {cards.map((card, index) => (
        <Card key={index} {...card} onDragStart={onDragStart} />
      ))}
    </div>
  );
}

export default Hand;
