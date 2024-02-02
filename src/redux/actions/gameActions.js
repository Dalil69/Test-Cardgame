export const actionTypes = {
    START_GAME: 'START_GAME',
    PLAY_CARD: 'PLAY_CARD',
    END_TURN: 'END_TURN',
  };
  
  export const startGame = () => ({
    type: actionTypes.START_GAME,
  });
  
  export const playCard = (cardId) => ({
    type: actionTypes.PLAY_CARD,
    payload: { cardId },
  });
  
  export const endTurn = () => ({
    type: actionTypes.END_TURN,
  });