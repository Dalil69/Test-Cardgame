import React from 'react';
import './BoardSide.css';

function BoardSide({ cards, onCardClick }) {
    return (
        <div className="board-side">
            {cards.map((card, index) => (
                <div key={index} className="card-slot">
                    <Card {...card} onClick={onCardClick} />
                </div>
            ))}
        </div>
    );
}


export default BoardSide;

