import React from 'react';
import './Board.css';
import BoardSlot from '../BoardSlot/BoardSlot';
import { useDispatch } from 'react-redux';
import { cardDropped } from '../../redux/actions/gameActions';

function Board({ slots }) {
  const dispatch = useDispatch();

  const handleCardDrop = (cardId, slotId) => {
    dispatch(cardDropped(cardId, slotId));
  };

  return (
    <div className="board">
      {slots.map((slot, index) => (
        <BoardSlot key={index} onDrop={(cardId) => handleCardDrop(cardId, index)} />
      ))}
    </div>
  );
}

export default Board;
