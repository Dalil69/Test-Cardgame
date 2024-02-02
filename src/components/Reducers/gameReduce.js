const initialState = {
  selectedCard: null,
  };
  
  const localGameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLAY_CARD':
        // Logique pour jouer une carte
        return { ...state, /* mise à jour de l'état */ };
      case 'SELECT_CARD':
        // Logique pour sélectionner une carte
        return { ...state, selectedCard: action.payload };
      default:
        return state;
    }
  };
  
  export default localGameReducer;
  
  
