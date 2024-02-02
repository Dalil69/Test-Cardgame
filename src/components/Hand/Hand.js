import React from 'react';
import Card from '../Card/Card';


function Hand({ cards, onCardPlay }) {
    return (
        <div className="hand">
            {cards.map((card, index) => (
                <Card key={index} {...card} onClick={() => onCardPlay(card)} />
            ))}
        </div>
    );
}

export default Hand;
