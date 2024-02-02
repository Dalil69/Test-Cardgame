// Dans App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from './redux/actions/gameActions';
import Hand from './components/Hand/Hand';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board/Board';

function App() {
  const dispatch = useDispatch();
  const { isGameStarted, playerHand } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {isGameStarted ? (
          <div>
            <div>Jeu en cours...</div>
            {/* Assurez-vous que Hand et tout autre composant impliqué dans le drag-and-drop sont enfants de DndProvider */}
            <Hand cards={playerHand} onCardPlay={(card) => console.log(card)} />
            <Board />
          </div>
        ) : (
          <div>Démarrage du jeu...</div>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
