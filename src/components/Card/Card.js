import React from 'react';
import { useDrag } from 'react-dnd';
import './Card.css';

function Card({ id, name, cost, strength, health, location }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Style conditionnel en fonction de l'emplacement de la carte
  const cardStyle = location === 'inGame' ? { border: '2px solid gold' } : {};

  return (
    <div
      ref={dragRef}
      className="card"
      style={{ ...cardStyle, opacity: isDragging ? 0.5 : 1 }}
    >
      <div>Nom: {name}</div>
      <div>Coût: {cost}</div>
      <div>Force: {strength}</div>
      <div>Vie: {health}</div>
    </div>
  );
}

export default Card;
