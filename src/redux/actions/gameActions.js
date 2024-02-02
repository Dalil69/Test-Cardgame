export const playCard = card => ({
    type: 'PLAY_CARD',
    payload: card,
  });
  
  export const selectCard = cardName => ({
    type: 'SELECT_CARD',
    payload: cardName,
  });