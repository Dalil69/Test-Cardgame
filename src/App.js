import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame } from './redux/actions/gameActions';

function App() {
  const dispatch = useDispatch();
  const isGameStarted = useSelector((state) => state.game.isGameStarted);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  return (
    <div>
      {isGameStarted ? (
        <div>Jeu en cours...</div>
      ) : (
        <div>Démarrage du jeu...</div>
      )}
    </div>
  );
}

export default App;
