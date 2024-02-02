import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { startGame } from './redux/actions/gameActions';
import Hand from './components/Hand/Hand';
import Board from './components/Board/Board';

function App() {
  const dispatch = useDispatch();
  const { isGameStarted, playerHand } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  // Exemple de données pour les slots
  const slotsData = [
    { id: 1, content: "Slot 1" },
    { id: 2, content: "Slot 2" },
    // Ajoutez autant de slots que nécessaire
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {isGameStarted ? (
          <div>
            <div>Jeu en cours...</div>
            <Hand cards={playerHand} onCardPlay={(card) => console.log(card)} />
            <Board slots={slotsData} /> {/* Utilisez ici les données des slots */}
          </div>
        ) : (
          <div>Démarrage du jeu...</div>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
