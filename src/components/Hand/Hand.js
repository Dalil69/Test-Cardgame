import React from 'react';
import Card from './Card/Card'; // Assurez-vous que le chemin d'accès est correct

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
