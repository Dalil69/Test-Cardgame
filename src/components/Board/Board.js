import React from 'react';
import './Board.css';
import BoardSlot from '../BoardSlot/BoardSlot';
import { useDispatch } from 'react-redux';
import { cardDropped } from '../../redux/actions'; // Assurez-vous que cette action existe

function Board({ slots }) {
  const dispatch = useDispatch();

  const handleCardDrop = (cardId) => {
    dispatch(cardDropped(cardId));
  };

  return (
    <div className="board">
      {slots.map((slot, index) => (
        <BoardSlot key={index} onDrop={handleCardDrop} />
      ))}
    </div>
  );
}

export default Board;
