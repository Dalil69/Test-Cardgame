import React from 'react';
import Card from './Card/Card'; // Assurez-vous que le chemin d'accès est correct

function Hand({ cards }) {
    return (
        <div className="hand">
            {cards.map((card, index) => (
                <Card key={index} {...card} /> // Utilisez le composant Card pour chaque carte
            ))}
        </div>
    );
}

export default Hand;
