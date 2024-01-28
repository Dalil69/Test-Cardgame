import React from 'react';
import Card from './components/Card/Card';
import BoardSide from './components/BoardSide/BoardSide';
function App() {
  const boardSideData = [
    { /* données de la carte 1 */ },
    { /* données de la carte 2 */ },
    // Ajoutez autant de cartes que vous le souhaitez
  ];
  return (
    <div>
      <h1>Bienvenue sur mon site React!</h1>
      <Card /> {/* Utilisation du composant Card */}
      <BoardSide cards={boardSideData} /> {/* Utilisation du composant BoardSide avec des données */}
    </div>
  );
}

export default App;

