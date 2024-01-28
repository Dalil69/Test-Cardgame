import React from 'react';
import './BoardSide.css';

function BoardSide(props) {
    // Exemple : Vous pouvez passer des cartes ou d'autres éléments en props
    const { cards } = props;

    return (
        <div className="board-side">
            {cards.map((card, index) => (
                <div key={index} className="card-slot">
                    {/* Ici, vous pouvez utiliser le composant Card ou un autre composant pour afficher les cartes */}
                </div>
            ))}
        </div>
    );
}

export default BoardSide;

