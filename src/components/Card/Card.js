import React from 'react';
import { useDispatch } from 'react-redux';
import './Card.css';
import { playCard } from '../../redux/actions/gameActions';

function Card({ id, name, cost, strength, health }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(playCard(id)); // Assurez-vous de passer l'ID correctement
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
