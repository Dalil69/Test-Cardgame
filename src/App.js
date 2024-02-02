// Dans App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from './redux/actions/gameActions';
import Hand from './components/Hand/Hand';

function App() {
  const dispatch = useDispatch();
  const { isGameStarted, playerHand } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <div>
      {isGameStarted ? (
        <div>
          <div>Jeu en cours...</div>
          <Hand cards={playerHand} onCardPlay={(card) => console.log(card)} />
        </div>
      ) : (
        <div>Démarrage du jeu...</div>
      )}
    </div>
  );
}

export default App;
