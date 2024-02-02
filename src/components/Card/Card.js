import React from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { playCard } from '../../redux/actions/gameActions';
import { useDrag } from 'react-dnd';

function Card({ id, name, cost, strength, health }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className="card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div>Nom: {name}</div>
      <div>Coût: {cost}</div>
      <div>Force: {strength}</div>
      <div>Vie: {health}</div>
    </div>
  );
}

export default Card;