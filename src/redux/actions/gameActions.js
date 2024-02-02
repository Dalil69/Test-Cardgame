export const actionTypes = {
    START_GAME: 'START_GAME',
    PLAY_CARD: 'PLAY_CARD',
    END_TURN: 'END_TURN',
    MOVE_CARD_TO_BOARD: 'MOVE_CARD_TO_BOARD',
    SET_CARD_POSITION: 'SET_CARD_POSITION',
  };
  
  export const startGame = () => ({
    type: actionTypes.START_GAME,
  });
  
  export const moveCardToBoard = (cardId, position) => ({
    type: actionTypes.MOVE_CARD_TO_BOARD,
    payload: { cardId, position },
  });
  
  export const setCardPosition = (cardId, newPosition) => ({
    type: actionTypes.SET_CARD_POSITION,
    payload: { cardId, newPosition },
  });

  export const playCard = (cardId) => ({
    type: actionTypes.PLAY_CARD,
    payload: { cardId },
  });
  
  export const endTurn = () => ({
    type: actionTypes.END_TURN,
  });