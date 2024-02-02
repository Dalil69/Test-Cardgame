import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCard } from '../../redux/actions/gameActions';
import './Card.css';

function Card({ name, cost, strength, health }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectCard(name));
  };

  return (
    <div className="card" onClick={handleClick}>
      <div>Nom: {name}</div>
      <div>Coût: {cost}</div>
      <div>Force: {strength}</div>
      <div>Vie: {health}</div>
    </div>
  );
}

export default Card;
